import Formatter from "./Formatter"

/**
 * Uses https://www.npmjs.com/package/js-beautify
 *
 */
class XMLFormatter extends Formatter {

    constructor(props) {
        super(props);
        this.language = 'XML';
    }

    setInitialValue() {
        this.formatOutput('<input><field1 attribute1="test"><field2>Test</field2></field1></input>');
    }

    prettyPrint(xml) {
        let formatted = '', indent = '';
        let tab = '\t';
        xml.split(/>\s*</).forEach(function (node) {
            console.debug("split ", node);
            if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
            formatted += indent + '<' + node + '>\r\n';
            if (node.match(/^<?\w[^>]*[^]$/)) indent += tab;              // increase indent
        });
        return formatted.substring(1, formatted.length - 3);
    }

    formatOutput(input) {
        let output = "";
        let inputValid = true;

        try {
            output = this.prettyPrint(this.cleanInput(input));
        } catch (e) {
            this.inputValid = false;
            output = "<b>Invalid XML:</b> <br>" + e;
        };

        this.setState({ input: input, output: output, inputValid: inputValid });
    }
}
export default XMLFormatter;