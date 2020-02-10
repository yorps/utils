import React from 'react'
import Navbar from "../Navbar";


/**
 * Uses https://www.npmjs.com/package/js-beautify
 *
 */
class JSONTool extends React.Component {

    constructor(props) {
        super(props);

        let input =  '{"a":1, "b":"foo", "c":[false,"false",null,"null", {"d":{"e":1.3e5,"f":"1.3e5"}}]}';
        let jsonObj = JSON.parse(input);
        let output = this.formatJSON(jsonObj);
        this.state = {
            input: input,
            output: output,
            option: 0, // 0 = decode // 1 = encode
            inputValid: true
        };
    }

    //Focus on Input field immediately
    componentDidMount(){
        this.textInput.focus();
    }

    handleInputChange = (e) => {
        this.encodeDecodeOutput(e.target.value);
    };

    formatJSON(jsonObj) {
        // pretty print
        let json = JSON.stringify(jsonObj, undefined, 4);


        // syntax highlight
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        //return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {


        // eslint-disable-next-line
        return json.replace(/('(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*'(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
           let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else  if (/^'/.test(match)) {
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


    encodeDecodeOutput(input) {
        let output = "";
        let inputValid = true;


        input = input.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
        // eslint-disable-next-line
        input = input.replace(/[\u0000-\u0019]+/g,"");

        try {
            let jsonObj = JSON.parse(input);
            output = this.formatJSON(jsonObj);
        } catch (e) {
            this.inputValid = false;
            output = "<b>Ungültiges JSON:</b> <br>" + e;
        }
         //output = this.formatJSON(input);
         //output = this.syntaxHighlight(input);

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
                    <h2>JSON Tool</h2>


                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Text eingeben oder kopieren:</label>
                        <textarea className={classNameInput}
                                  id="exampleFormControlTextarea1"
                                  rows="10"
                                  ref={(input) => { this.textInput = input; }}
                                  value={this.state.input}
                                  onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <br/>
                        <pre className="jsonOutput" contentEditable='true' dangerouslySetInnerHTML={this.createMarkup()}></pre>
                    </div>




                </div>
            </div>
        )

    }
}
export default JSONTool;