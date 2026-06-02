import React, { useState, useEffect, useRef } from 'react'
import Navbar from "../navbar/Navbar";

const Base64Decoder: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [option, setOption] = useState<number>(0); // 0 = decode // 1 = encode
    const [inputValid, setInputValid] = useState<boolean>(true);

    const textInputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
    }, []);

    const encodeDecodeOutput = (currentInput: string, currentOption: number) => {
        let currentOutput = "";
        let isInputValid = true;

        if (currentOption === 0) {
            try {
                currentOutput = atob(currentInput);
            } catch (e) {
                currentOutput = "<Input invalid>";
                isInputValid = false;
            }
        } else {
            currentOutput = btoa(currentInput);
        }

        setInput(currentInput);
        setOutput(currentOutput);
        setOption(currentOption);
        setInputValid(isInputValid);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        encodeDecodeOutput(e.target.value, option);
    };

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        encodeDecodeOutput(input, Number(e.target.value));
    };

    const classNameInput = inputValid ? "form-control rounded-0" : "form-control rounded-0 is-invalid";

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Base 64 Encoder / Decoder</h2>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"></label>
                    <textarea className={classNameInput}
                              id="exampleFormControlTextarea1"
                              rows={10}
                              ref={textInputRef}
                              value={input}
                              onChange={handleInputChange}> </textarea>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="inlineCheckbox1" value="0"
                           checked={option === 0}
                           onChange={handleOptionChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">From Base64</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="inlineCheckbox2" value="1"
                           checked={option === 1}
                           onChange={handleOptionChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">To Base64</label>
                </div>

                <div className="form-group">
                    <br />
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows={10} value={output} readOnly></textarea>
                </div>

                <div>More Info: <a href="https://en.wikipedia.org/wiki/Base64">https://en.wikipedia.org/wiki/Base64</a></div>
            </div>
        </div>
    );
};

export default Base64Decoder;