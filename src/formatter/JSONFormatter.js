import Formatter from './Formatter'


/**
 * Uses https://www.npmjs.com/package/js-beautify
 *
 */
class JSONFormatter extends Formatter {

    constructor(props) {
        super(props);
        this.language = 'JSON';
    }

    setInitialValue() {
        this.formatOutput('{"a":1, "b":"foo", "c":[false,"false",null,"null", {"d":{"e":1.3e5,"f":"1.3e5"}}]}');
    }


    prettyPrint(jsonObj) {
        return (JSON.stringify(jsonObj, undefined, 4));
    }

    syntaxHighlight(jsonString) {

        // syntax highlight
        jsonString = jsonString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        //return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {


        // eslint-disable-next-line
        return jsonString.replace(/('(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*'(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/^'/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }


    formatOutput(input) {
        let output = "";
        let inputValid = true;

        try {
            input = this.cleanInput(input);
            let jsonObj = JSON.parse(input);
            output = this.prettyPrint(jsonObj);
            //output = this.syntaxHighlight(this.prettyPrint(jsonObj));
        } catch (e) {
            this.inputValid = false;
            output = "<b>Invalid JSON:</b> <br>" + e;
        }

        this.setState({ input: input, output: output, inputValid: inputValid });
    }
}
export default JSONFormatter;