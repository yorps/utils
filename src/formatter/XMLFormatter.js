import React from 'react'
import Navbar from "../navbar/Navbar";

/**
 * Uses https://www.npmjs.com/package/js-beautify
 *
 */
class XMLFormatter extends React.Component {

    constructor(props) {
        super(props);

        let input =  '<input><field1 attribute1="test"><field2>Test</field2></field1></input>';
        let output = this.formatOutput(input);
        this.state = {
            input: input,
            output: output,
            inputValid: true
        };
    }

    //Focus on Input field immediately
    componentDidMount(){
        this.textInput.focus();
    }

    handleInputChange = (e) => {
        this.formatOutput(e.target.value);
    };

    // remove non-printable and other non-valid chars
    cleanInput(input) {
        let cleanedInput =  input.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
        // eslint-disable-next-line
        cleanedInput = cleanedInput.replace(/[\u0000-\u0019]+/g,"");
        return cleanedInput;
    }

    formatOutput(input) {
        let output = "";
        let inputValid = true;

        try {
            //var format = require('xml-formatter');

            function formatXml(xml, tab) { // tab = optional indent value, default is tab (\t)
                var formatted = '', indent= '';
                tab = tab || '\t';
                xml.split(/>\s*</).forEach(function(node) {
                    if (node.match( /^\/\w/ )) indent = indent.substring(tab.length); // decrease indent by one 'tab'
                    formatted += indent + '<' + node + '>\r\n';
                    if (node.match( /^<?\w[^>]*[^]$/ )) indent += tab;              // increase indent
                });
                return formatted.substring(1, formatted.length-3);
            }

            output = formatXml(this.cleanInput(input));
        } catch (e) {
            this.inputValid = false;
            output = "<b>Invalid XML:</b> <br>" + e;
        };

        this.setState({input: input, output: output,  inputValid: inputValid});
    }

    createMarkup() {
        return {__html: this.state.output};
    };

    render() {
        const classNameInput = this.state.inputValid ? "form-control rounded-0" : "form-control rounded-0 is-invalid";
        return (
            <div>
                <Navbar/>



                <div className="container">
                    <h2>XML Formatter</h2>


                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">XML Input:</label>
                        <textarea className={classNameInput}
                                  id="exampleFormControlTextarea1"
                                  rows="10"
                                  ref={(input) => { this.textInput = input; }}
                                  value={this.state.input}
                                  onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <br />

                        <textarea className={classNameInput}
                            rows="10"
                            value={this.state.output} />



                        <pre>{this.state.output}</pre>
                    </div>




                </div>
            </div>
        )

    }
}
export default XMLFormatter;