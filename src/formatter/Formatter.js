import React from 'react'
import Navbar from "../navbar/Navbar";


/**
 * Uses https://www.npmjs.com/package/js-beautify
 *
 */
class Formatter extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: '',
            inputValid: true
        };
        this.language = "";
    }

    //Focus on Input field immediately
    componentDidMount() {
        this.setInitialValue();
        this.textInput.focus();
    }

    setInitialValue() {
    }

    handleInputChange = (e) => {
        this.formatOutput(e.target.value);
    };

    // remove non-printable and other non-valid chars
    cleanInput(input) {
        let cleanedInput = input.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
        // eslint-disable-next-line
        cleanedInput = cleanedInput.replace(/[\u0000-\u0019]+/g, "");
        return cleanedInput;
    }


    formatOutput(input) {
        let output = input;
        let inputValid = true;
        this.setState({ input: input, output: output, inputValid: inputValid });
    }

    
    // createMarkup() {
    //     return { __html: this.state.output };
    // };

    render() {
        const classNameInput = this.state.inputValid ? "form-control rounded-0" : "form-control rounded-0 is-invalid";
        return (
            <div>
                <Navbar />

                <div className="container">
                    <h2>{this.language} Formatter</h2>


                    <div className="form-group">
                        <label htmlFor="inputTextarea">Input ({this.language}):</label>
                        <textarea className={classNameInput}
                            id="inputTextarea"
                            rows="10"
                            ref={(input) => { this.textInput = input; }}
                            value={this.state.input}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <br />
                        <textarea className={classNameInput}
                                rows="10"
                                value={this.state.output} />
                        
                        {/* 
                        <pre className="formatterOutput" contentEditable='true' dangerouslySetInnerHTML={this.createMarkup()}></pre>
                        */}
                    </div> 




                </div>
            </div>
        )

    }
}
export default Formatter;