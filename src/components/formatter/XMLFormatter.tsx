import React from 'react';
import Formatter from "./Formatter";

const XMLFormatter: React.FC = () => {
    const language = 'XML';
    const initialValue = '<input><field1 attribute1="test"><field2>Test</field2></field1></input>';

    const prettyPrint = (xml: string) => {
        let formatted = '', indent = '';
        let tab = '\t';
        xml.split(/>\s*</).forEach(function (node) {
            if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
            formatted += indent + '<' + node + '>\r\n';
            if (node.match(/^<?\w[^>]*[^]$/)) indent += tab;              // increase indent
        });
        return formatted.substring(1, formatted.length - 3);
    };

    const formatLogic = (input: string, cleanInput: (val: string) => string) => {
        let formattedOutput = "";
        let isValid = true;
        try {
            formattedOutput = prettyPrint(cleanInput(input));
        } catch (e) {
            isValid = false;
            formattedOutput = "Invalid XML: \n" + e;
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

export default XMLFormatter;