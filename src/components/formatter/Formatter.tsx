import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../navbar/Navbar";

interface FormatterProps {
    language: string;
    initialValue?: string;
    formatLogic: (input: string, cleanInput: (val: string) => string) => { formattedOutput: string; isValid: boolean };
}

const Formatter: React.FC<FormatterProps> = ({ language, initialValue, formatLogic }) => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [inputValid, setInputValid] = useState<boolean>(true);

    const textInputRef = useRef<HTMLTextAreaElement>(null);

    // remove non-printable and other non-valid chars
    const cleanInput = (val: string): string => {
        let cleanedInput = val.replace(/\\n/g, "\\n")
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
    };

    const formatOutput = (rawInput: string) => {
        let { formattedOutput, isValid } = formatLogic(rawInput, cleanInput);
        setInput(rawInput);
        setOutput(formattedOutput);
        setInputValid(isValid);
    };

    useEffect(() => {
        if (initialValue) {
            formatOutput(initialValue);
        }
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        formatOutput(e.target.value);
    };

    const classNameInput = inputValid ? "form-control rounded-0" : "form-control rounded-0 is-invalid";

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>{language} Formatter</h2>

                <div className="form-group">
                    <label htmlFor="inputTextarea">Input ({language}):</label>
                    <textarea className={classNameInput}
                              id="inputTextarea"
                              rows={10}
                              ref={textInputRef}
                              value={input}
                              onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <br />
                    <textarea className={classNameInput}
                              rows={10}
                              readOnly
                              value={output} />
                </div>
            </div>
        </div>
    );
};

export default Formatter;