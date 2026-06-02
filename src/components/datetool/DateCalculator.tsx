import React from "react";

interface DateCalculatorProps {
    val: number;
    unit: string;
    changeAddend: (val: number, unit: string) => void;
    reset?: () => void;
}

const DateCalculator: React.FC<DateCalculatorProps> = ({ val, unit, changeAddend }) => {
    const addendPlus = () => {
        changeAddend(val + 1, unit);
    };

    const addendMinus = () => {
        changeAddend(val - 1, unit);
    };

    const stringPlus = val > 0 ? ("+" + val) : " ";
    const stringMinus = val < 0 ? (val) : " ";

    return (
        <div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-secondary" onClick={addendMinus}>-</button>
                </div>
                <div className="col font-weight-bold">
                    {stringMinus}
                </div>
                <div className="col text-center">
                    {unit}
                </div>
                <div className="col font-weight-bold">
                    {stringPlus}
                </div>
                <div className="col text-right" >
                    <button type="button" className="btn btn-secondary" onClick={addendPlus}>+</button>
                </div>
            </div>
        </div>
    );
};

export default DateCalculator;