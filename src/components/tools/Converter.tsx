import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";

const Converter: React.FC = () => {
    const [category, setCategory] = useState<'data' | 'time'>('data');
    const [values, setValues] = useState<{ [key: string]: string }>({});

    const unitDefinitions = {
        data: [
            { key: 'bit', label: 'Bit (b)', factor: 1 },
            { key: 'byte', label: 'Byte (B)', factor: 8 },
            { key: 'kb', label: 'Kilobyte (KB)', factor: 8 * 1024 },
            { key: 'mb', label: 'Megabyte (MB)', factor: 8 * 1024 ** 2 },
            { key: 'gb', label: 'Gigabyte (GB)', factor: 8 * 1024 ** 3 },
            { key: 'tb', label: 'Terabyte (TB)', factor: 8 * 1024 ** 4 }
        ],
        time: [
            { key: 'ms', label: 'Milliseconds (ms)', factor: 1 },
            { key: 's', label: 'Seconds (s)', factor: 1000 },
            { key: 'min', label: 'Minutes (min)', factor: 1000 * 60 },
            { key: 'h', label: 'Hours (h)', factor: 1000 * 60 * 60 },
            { key: 'd', label: 'Days (d)', factor: 1000 * 60 * 60 * 24 }
        ]
    };

    const units = unitDefinitions[category];

    const resetValues = () => {
        const emptyValues: { [key: string]: string } = {};
        unitDefinitions.data.forEach(u => emptyValues[u.key] = '');
        unitDefinitions.time.forEach(u => emptyValues[u.key] = '');
        setValues(emptyValues);
    };

    const handleChange = (key: string, value: string) => {
        if (value === '') {
            resetValues();
            return;
        }

        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
            setValues(prev => ({ ...prev, [key]: value }));
            return;
        }

        const currentUnit = units.find(u => u.key === key);
        if (!currentUnit) return;

        const baseValue = numericValue * currentUnit.factor;

        const newValues = { ...values };
        units.forEach(unit => {
            if (unit.key === key) {
                newValues[unit.key] = value;
            } else {
                const convertedValue = baseValue / unit.factor;
                newValues[unit.key] = convertedValue.toLocaleString('fullwide', { useGrouping: false, maximumFractionDigits: 10 }).replace(',', '.');
            }
        });

        setValues(newValues);
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Unit Converter</h2>
                    <select 
                        className="form-select w-auto" 
                        value={category} 
                        onChange={(e) => {
                            setCategory(e.target.value as 'data' | 'time');
                            resetValues();
                        }}
                    >
                        <option value="data">Data Sizes</option>
                        <option value="time">Time</option>
                    </select>
                </div>
                
                <div className="row mt-4">
                    {units.map(unit => (
                        <div key={unit.key} className="col-md-4 mb-3">
                            <label className="form-label">{unit.label}</label>
                            <input
                                type="number"
                                className="form-control"
                                value={values[unit.key] || ''}
                                onChange={(e) => handleChange(unit.key, e.target.value)}
                                placeholder={`Enter ${unit.label}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-3">
                    <button className="btn btn-secondary" onClick={resetValues}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Converter;