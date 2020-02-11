import React from 'react'
import Navbar from "../Navbar";
import md5 from 'crypto-js/md5';
import sha256 from 'crypto-js/sha256';


class Generator extends React.Component {

    constructor(props) {
        super(props);

        this.options = [
            'md5',
            'sha256'
        ];
        this.state = {
            input: "",
            output: "",
            func: "md5"
        };
    }

    handleInputChange = (e) => {
        this.generateHash(e.target.value, this.state.func);
    };

    handleFunctionChange = (e) => {
        this.generateHash(this.state.input, e.target.value);
    };

    generateHash (input, func) {
        let output = "";
        switch (func) {
            case "md5":
                output = md5(input);
                break;
            case "sha256":
                output = sha256(input);
                break;
        }
        this.setState({input: input, output: output, func: func});
    }

    render() {

        return (
            <div>
                <Navbar/>

                <div className="container">

                    <h2>Hash Generator</h2>

                    Input:
                    <div className="form-group">
                        <textarea id="generatorInput"
                                  rows="10"
                                  class="form-control"
                                  ref={(input) => { this.textInput = input; }}
                                  value={this.state.input}
                                  onChange={this.handleInputChange}/>
                    </div>

                    Hash function: &nbsp;
                    <select onChange={this.handleFunctionChange} value={this.state.func}>
                        <option value="md5">MD5</option>
                        <option value="sha256">SHA256</option>
                    </select>
                    <br/>


                    <div className="form-group">
                        <br/>
                        <textarea id="generatorOutput"
                                  class="form-control"
                                  rows="10"
                                  value={this.state.output}/>

                    </div>

                </div>
            </div>
        )

    }
}
export default Generator