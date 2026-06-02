import React, { useRef, useEffect } from 'react';

interface CopyInputProps {
    text: string | number;
}

const CopyInput: React.FC<CopyInputProps> = ({ text }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = text.toString();
        }
    }, [text]);

    const copyText = () => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand('copy');
        }
    };

    return (
        <div className="input-group input-group-sm mb-3" style={{ width: '195px' }}>
            <input
                ref={inputRef}
                type="text"
                readOnly
                className="form-control form-control-sm"
                aria-label="date"
            />
            <div className="input-group-append">
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={copyText}>copy</button>
            </div>
        </div>
    );
};

export default CopyInput;

