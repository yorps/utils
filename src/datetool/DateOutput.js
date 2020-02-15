import React from 'react'
import {formatDate} from './DateHelper';


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

            let offset = (new Date()).getTimezoneOffset() * 60;
            timeStringLocale = formatDate(time-offset);

            secondsSinceMidnight = time % day;
            dayStart = time - secondsSinceMidnight;
            dayEnd = dayStart + day;
            let date = new Date(time * 1000);
            weekday = weekdays[date.getDay()];
        }



        return (

            <div className="dateOutput">


                <div className="row">
                    <div className="col">
                        Timestamp (UTC)
                    </div>
                    <div className="col">
                        <input type="text" readonly value={timeOut}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <b>UTC</b><br/>
                    </div>
                    <div className="col">
                        <input type="text" readonly  value={timeString}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        Local<br/>
                    </div>
                    <div className="col">
                        <input type="text" readonly value={timeStringLocale}/>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col">
                        Timestamp day start<br/>
                    </div>
                    <div className="col">
                        <input type="text" readonly value={dayStart}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        Timestamp day end<br/>
                    </div>
                    <div className="col">
                        <input type="text" readonly value={dayEnd}/>
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                        Sec. since midnight<br/>
                    </div>
                    <div className="col">
                        <input type="text" readonly value={secondsSinceMidnight}/>
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                        Day of week<br/>
                    </div>
                    <div className="col">
                        <input type="text" readonly value={weekday}/>
                    </div>
                </div>
            </div>
        );
    }
}

DateOutput.defaultProps = {datetime: 0};
export default DateOutput