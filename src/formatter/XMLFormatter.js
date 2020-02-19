import React from 'react'
import Navbar from "../Navbar";
import 'xml-formatter';


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

   
    formatOutput(input) {
        let output = "";
        let inputValid = true;

        // remove non-printable and other non-valid chars
        input = input.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
        // eslint-disable-next-line
        input = input.replace(/[\u0000-\u0019]+/g,"");



        try {
            var format = require('xml-formatter');
            output = format(input);
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
                        <br/>
                       
                        <textarea className={classNameInput}
                            rows="10"
                            value={this.state.output}/>

                       

                    </div>




                </div>
            </div>
        )

    }
}
export default XMLFormatter;