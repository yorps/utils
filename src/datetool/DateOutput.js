import React from 'react'
import {formatDate} from './DateHelper';
import CopyInput from '../commons/CopyInput';


export class DateOutput extends React.Component {
    render() {
        let time = this.props.datetime;



        const day = 86400;
        const weekdays = new Array(7);
        weekdays[0] =  "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";


        // init
        let timeOut = "";
        let timeString = "";
        let secondsSinceMidnight = "";
        let dayStart = "";
        let dayEnd = "";
        let weekday = "";
        let timeStringLocale = "";

        if (time && time > 0) {
            timeOut = time;
            timeString = formatDate(time);
            let date = new Date(time * 1000);

            let offset = date.getTimezoneOffset() * 60;
            timeStringLocale = formatDate(time-offset);

            secondsSinceMidnight = time % day;
            dayStart = time - secondsSinceMidnight;
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
                        <b>UTC</b><br/>
                    </div>
                    <div className="col">
                        <CopyInput text={timeString}></CopyInput>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        Local<br/>
                    </div>
                    <div className="col">
                        <CopyInput text={timeStringLocale}></CopyInput>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col">
                        Timestamp day start<br/>
                    </div>
                    <div className="col">
                        <CopyInput text={dayStart}></CopyInput>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        Timestamp day end<br/>
                    </div>
                    <div className="col">
                        <CopyInput text={dayEnd}></CopyInput>
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                        Sec. since midnight<br/>
                    </div>
                    <div className="col">
                        <CopyInput text={secondsSinceMidnight}></CopyInput>
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                        Day of week<br/>
                    </div>
                    <div className="col">
                        <CopyInput text={weekday}></CopyInput>
                    </div>
                </div>
            </div>
        );
    }
}

DateOutput.defaultProps = {datetime: 0};
export default DateOutput