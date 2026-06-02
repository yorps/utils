import React from 'react';
import Formatter from './Formatter';

const JSONFormatter: React.FC = () => {
    const language = 'JSON';
    const initialValue = '{"a":1, "b":"foo", "c":[false,"false",null,"null", {"d":{"e":1.3e5,"f":"1.3e5"}}]}';

    const formatLogic = (input: string, cleanInput: (val: string) => string) => {
        let formattedOutput = "";
        let isValid = true;
        try {
            const cleaned = cleanInput(input);
            const jsonObj = JSON.parse(cleaned);
            formattedOutput = JSON.stringify(jsonObj, undefined, 4);
        } catch (e) {
            isValid = false;
            formattedOutput = "Invalid JSON: \n" + e;
        }
        return { formattedOutput, isValid };
    };

    return (
        <Formatter
            language={language}
            initialValue={initialValue}
            formatLogic={formatLogic}
        />
    );
};

export default JSONFormatter;