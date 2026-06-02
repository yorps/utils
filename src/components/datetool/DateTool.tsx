import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../navbar/Navbar'
import DateOutput from "./DateOutput";
import DateCalculator from "./DateCalculator"
import { formatDate, parseDate, addMonth, isValidTimestamp } from '../../utils/DateHelper';

interface Addends {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    weeks: number;
    months: number;
    years: number;
}

const DateTool: React.FC = () => {
    const [baseTime, setBaseTimeState] = useState<number | null>(null);
    const [baseTimeInput, setBaseTimeInput] = useState<string>("");
    const [baseTimeString, setBaseTimeString] = useState<string>("");
    const [baseTimeInputValid, setBaseTimeInputValid] = useState<boolean>(true);
    const [dateInputValid] = useState<boolean>(true);
    const [diff, setDiff] = useState<number>(0);
    const [addends, setAddends] = useState<Addends>({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        years: 0
    });

    const inputBaseTimeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputBaseTimeRef.current) {
            inputBaseTimeRef.current.focus();
        }
    }, []);

    const setBaseTime = (newBaseTime: number | string) => {
        let bTime: number | null = null;
        let bTimeInputValid = true;
        let bTimeString = "";

        const numericBaseTime = Number(newBaseTime);

        if (isValidTimestamp(numericBaseTime)) {
            bTime = numericBaseTime;

            // ms to s
            if (bTime >= 1000000000000 && bTime <= 9999999999999) {
                bTime = bTime / 1000;
            }

            bTimeString = formatDate(bTime);
        } else {
            bTime = null;
            bTimeInputValid = false;
        }

        setBaseTimeState(bTime);
        setBaseTimeInput(newBaseTime.toString());
        setBaseTimeInputValid(bTimeInputValid);
        setBaseTimeString(bTimeString);
    };

    const handleBaseTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBaseTime(e.target.value);
    };

    const handleDateStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const bTimeString = e.target.value;
        let date = parseDate(bTimeString);

        if (date) {
            setBaseTime(Math.floor(date.getTime() / 1000));
        } else {
            setBaseTimeString(bTimeString);
        }
    };

    const startCalculation = () => {
        if (baseTime !== null) {
            setBaseTimeState(baseTime);
            setBaseTimeString(formatDate(baseTime));
        }
    };

    const setBaseTimeNow = () => {
        const timestampNow = Math.floor(new Date().getTime() / 1000);
        setBaseTime(timestampNow);
    };

    const recalculateTarget = (currentAddends: Addends, currentBaseTime: number | null) => {
        if (currentBaseTime === null) return;
        let change = 0;
        for (let unit in currentAddends) {
            let val = currentAddends[unit as keyof Addends];
            switch (unit) {
                case 'seconds':
                    change += val;
                    break;
                case 'minutes':
                    change += (val * 60);
                    break;
                case 'hours':
                    change += (val * 60 * 60);
                    break;
                case 'days':
                    change += (val * 60 * 60 * 24);
                    break;
                case 'weeks':
                    change += (val * 60 * 60 * 24 * 7);
                    break;
                case 'months':
                    let currentDate = new Date(currentBaseTime * 1000);
                    let targetDate = addMonth(currentDate, val);
                    change += targetDate.getTime() / 1000 - currentDate.getTime() / 1000;
                    break;
                case 'years':
                    let currentDateY = new Date(currentBaseTime * 1000);
                    let targetDateY = new Date(currentBaseTime * 1000);
                    targetDateY.setFullYear(currentDateY.getFullYear() + val);
                    change += targetDateY.getTime() / 1000 - currentDateY.getTime() / 1000;
                    break;
                default:
                    break;
            }
        }
        setDiff(change);
    };

    useEffect(() => {
        recalculateTarget(addends, baseTime);
    }, [addends, baseTime]);

    const resetCalculator = () => {
        const initialAddends: Addends = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
            weeks: 0,
            months: 0,
            years: 0
        };
        setAddends(initialAddends);
    };

    const changeAddend = (addend: number, unit: keyof Addends) => {
        setAddends(prev => ({
            ...prev,
            [unit]: addend
        }));
    };

    const classNameBaseInput = baseTimeInputValid ? "form-control" : "form-control is-invalid";
    const classNameDateStringInput = dateInputValid ? "form-control" : "form-control is-invalid";

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Date Tool</h2>
                <br />
                <div className="row no-gutters">
                    <div className="col-3">
                        <label>Unix Timestamp</label><br />
                        <input type="text" value={baseTimeInput}
                               ref={inputBaseTimeRef}
                               onChange={handleBaseTimeChange}
                               className={classNameBaseInput}
                        />
                    </div>
                    <div className="col-1" />
                    <div className="col-3">
                        <label>Date</label><br />
                        <input type="text" value={baseTimeString}
                               onChange={handleDateStringChange}
                               className={classNameDateStringInput} />
                        <i>DD.MM.YYYY HH:MM:SS</i>
                    </div>
                    <div className="col-1" />
                    <div className="col-1">
                        <br />
                        <button type="button" className="btn btn-primary" onClick={startCalculation}>Calculate</button>
                    </div>
                    <div className="col-1">
                        <br />
                        <button type="button" className="btn btn-secondary" onClick={setBaseTimeNow}>Now</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <DateOutput datetime={baseTime ?? undefined} />
                    </div>

                    <div className="col dateOutput">
                        <DateCalculator unit="seconds" val={addends.seconds} changeAddend={(val) => changeAddend(val, 'seconds')} />
                        <DateCalculator unit="minutes" reset={resetCalculator} val={addends.minutes} changeAddend={(val) => changeAddend(val, 'minutes')} />
                        <DateCalculator unit="hours" reset={resetCalculator} val={addends.hours} changeAddend={(val) => changeAddend(val, 'hours')} />
                        <DateCalculator unit="days" reset={resetCalculator} val={addends.days} changeAddend={(val) => changeAddend(val, 'days')} />
                        <DateCalculator unit="weeks" reset={resetCalculator} val={addends.weeks} changeAddend={(val) => changeAddend(val, 'weeks')} />
                        <DateCalculator unit="months" reset={resetCalculator} val={addends.months} changeAddend={(val) => changeAddend(val, 'months')} />
                        <DateCalculator unit="years" reset={resetCalculator} val={addends.years} changeAddend={(val) => changeAddend(val, 'years')} />

                        <br />
                        <div className="text-center">
                            <button type="button" className="btn btn-secondary" onClick={resetCalculator}>Reset</button>
                        </div>
                    </div>

                    <div className="col">
                        <DateOutput datetime={(baseTime || 0) + diff} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateTool;