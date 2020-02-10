import React from 'react'
import Navbar from "../Navbar";


class Base64Decoder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            output: "",
            option: 0, // 0 = decode // 1 = encode
            inputValid: true
        }

    }

    //Focus on Input field immediately
    componentDidMount(){
        this.textInput.focus();
    }

    handleInputChange = (e) => {
        this.encodeDecodeOutput(e.target.value, this.state.option);
    };

    handleOptionChange = (e) => {
        this.encodeDecodeOutput(this.state.input, e.target.value * 1);
    };

    encodeDecodeOutput(input, option) {
        let output = "";
        let inputValid = true;

        // Encode btoa(string);
        // Decode atob(string)
        if (option  === 0) {
            try {
                output = atob(input);
            } catch (e) {
                output = "<Input invalid>";
                inputValid = false;
            }
        } else {
            output = btoa(input);
        }

        this.setState({input: input, output: output, option: option, inputValid: inputValid});
    }

    render() {
        const classNameInput = this.state.inputValid ? "form-control rounded-0" : "form-control rounded-0 is-invalid";
        return (
            <div>
                <Navbar/>



                <div className="container">
                    <h2>Base 64 Encoder / Decoder</h2>


                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1"></label>
                        <textarea className={classNameInput}
                                  id="exampleFormControlTextarea1"
                                  rows="10"
                                  ref={(input) => { this.textInput = input; }}
                                  value={this.state.input}
                                  onChange={this.handleInputChange}> </textarea>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="inlineCheckbox1" value="0"
                               checked={this.state.option === 0}
                               onChange={this.handleOptionChange}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">From Base64</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="inlineCheckbox2" value="1"
                               checked={this.state.option === 1}
                               onChange={this.handleOptionChange}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">To Base64</label>
                    </div>


                    <div className="form-group">
                        <br/>
                        <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"  value={this.state.output} readOnly></textarea>
                    </div>


                    <div>More Info: <a href=" https://de.wikipedia.org/wiki/Base64">https://de.wikipedia.org/wiki/Base64</a></div>



                </div>
            </div>
        )

    }
}
export default Base64Decoder;