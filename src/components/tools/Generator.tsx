import React, { useState, useEffect, useRef } from 'react'
import Navbar from "../navbar/Navbar";
import md5 from 'crypto-js/md5';
import sha1 from 'crypto-js/sha1';
import sha256 from 'crypto-js/sha256';
import sha512 from 'crypto-js/sha512';

const Generator: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [func, setFunc] = useState<string>("sha256");

    const textInputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
    }, []);

    const generateHash = (currentInput: string, currentFunc: string) => {
        let currentOutput = "";
        switch (currentFunc) {
            case "md5":
                currentOutput = md5(currentInput).toString();
                break;
            case "sha1":
                currentOutput = sha1(currentInput).toString();
                break;
            case "sha256":
                currentOutput = sha256(currentInput).toString();
                break;
            case "sha512":
                currentOutput = sha512(currentInput).toString();
                break;
            default:
                break;
        }
        setInput(currentInput);
        setOutput(currentOutput);
        setFunc(currentFunc);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        generateHash(e.target.value, func);
    };

    const handleFunctionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        generateHash(input, e.target.value);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Hash Generator</h2>

                Input:
                <div className="form-group">
                    <textarea id="generatorInput"
                              rows={10}
                              className="form-control"
                              ref={textInputRef}
                              value={input}
                              onChange={handleInputChange} />
                </div>

                Hash function: &nbsp;
                <select onChange={handleFunctionChange} value={func}>
                    <option value="md5">MD5</option>
                    <option value="sha1">SHA1</option>
                    <option value="sha256">SHA256</option>
                    <option value="sha512">SHA512</option>
                </select>
                <br />

                <div className="form-group">
                    <br />
                    <textarea id="generatorOutput"
                              className="form-control"
                              rows={10}
                              readOnly
                              value={output} />
                </div>
            </div>
        </div>
    );
};

export default Generator;