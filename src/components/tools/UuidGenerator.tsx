import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../navbar/Navbar";

const UuidGenerator: React.FC = () => {
    const [count, setCount] = useState<number>(5);
    const [output, setOutput] = useState<string>("");
    const [uppercase, setUppercase] = useState<boolean>(false);

    const countInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (countInputRef.current) {
            countInputRef.current.focus();
        }
        generateUuids(5, false);
    }, []);

    const generateUuids = (currentCount: number, isUppercase: boolean) => {
        const uuids = [];
        for (let i = 0; i < currentCount; i++) {
            let uuid = crypto.randomUUID();
            if (isUppercase) {
                uuid = uuid.toUpperCase();
            }
            uuids.push(uuid);
        }
        setOutput(uuids.join('\n'));
    };

    const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value) || 1;
        setCount(newCount);
        generateUuids(newCount, uppercase);
    };

    const handleUppercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setUppercase(isChecked);
        generateUuids(count, isChecked);
    };

    const handleGenerateClick = () => {
        generateUuids(count, uppercase);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>UUID/GUID Generator</h2>

                <div className="row mb-3">
                    <div className="col-md-3">
                        <label htmlFor="uuidCount" className="form-label">Number of UUIDs:</label>
                        <input
                            type="number"
                            id="uuidCount"
                            className="form-control"
                            min="1"
                            max="100"
                            ref={countInputRef}
                            value={count}
                            onChange={handleCountChange}
                        />
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                        <div className="form-check mb-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="uppercaseCheck"
                                checked={uppercase}
                                onChange={handleUppercaseChange}
                            />
                            <label className="form-check-label" htmlFor="uppercaseCheck">
                                Uppercase
                            </label>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                        <button className="btn btn-primary mb-2" onClick={handleGenerateClick}>
                            Regenerate
                        </button>
                    </div>
                </div>

                <div className="form-group">
                    <textarea
                        id="uuidOutput"
                        className="form-control"
                        rows={15}
                        readOnly
                        value={output}
                        style={{ fontFamily: 'monospace' }}
                    />
                </div>
                <div className="mt-2">
                    <button 
                        className="btn btn-secondary btn-sm" 
                        onClick={() => navigator.clipboard.writeText(output)}
                        disabled={!output}
                    >
                        Copy to Clipboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UuidGenerator;
