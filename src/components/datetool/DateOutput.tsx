import React from 'react';
import { formatDate } from '../../utils/DateHelper';
import CopyInput from '../commons/CopyInput';

interface DateOutputProps {
    datetime?: number;
}

const DateOutput: React.FC<DateOutputProps> = ({ datetime = 0 }) => {
    const day = 86400;
    const weekdays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    // init
    let timeOut: string | number = "";
    let timeString = "";
    let secondsSinceMidnight: string | number = "";
    let dayStart: string | number = "";
    let dayEnd: string | number = "";
    let weekday = "";
    let timeStringLocale = "";

    if (datetime && datetime > 0) {
        timeOut = datetime;
        timeString = formatDate(datetime);
        const date = new Date(datetime * 1000);

        const offset = date.getTimezoneOffset() * 60;
        timeStringLocale = formatDate(datetime - offset);

        secondsSinceMidnight = datetime % day;
        dayStart = datetime - secondsSinceMidnight;
        dayEnd = dayStart + day;

        weekday = weekdays[date.getDay()];
    }

    return (
        <div className="dateOutput">
            <div className="row">
                <div className="col">
                    Timestamp (UTC)
                </div>
                <div className="col">
                    <CopyInput text={timeOut}></CopyInput>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <b>UTC</b><br />
                </div>
                <div className="col">
                    <CopyInput text={timeString}></CopyInput>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    Local<br />
                </div>
                <div className="col">
                    <CopyInput text={timeStringLocale}></CopyInput>
                </div>
            </div>

            <br />

            <div className="row">
                <div className="col">
                    Timestamp day start<br />
                </div>
                <div className="col">
                    <CopyInput text={dayStart}></CopyInput>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    Timestamp day end<br />
                </div>
                <div className="col">
                    <CopyInput text={dayEnd}></CopyInput>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    Sec. since midnight<br />
                </div>
                <div className="col">
                    <CopyInput text={secondsSinceMidnight}></CopyInput>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    Day of week<br />
                </div>
                <div className="col">
                    <CopyInput text={weekday}></CopyInput>
                </div>
            </div>
        </div>
    );
};

export default DateOutput;