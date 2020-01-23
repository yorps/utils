import React from 'react'
import Navbar from '../Navbar'
import DateOutput from "./DateOutput";
import DateCalculator from "./DateCalculator";
import {formatDate} from './DateHelper';
import {parseDate} from "./DateHelper";
import {addMonth} from './DateHelper';
import {isValidTimestamp} from './DateHelper';


class DateTool extends React.Component {

    //this.props.baseTime = 0;
    constructor(props) {
        super(props);
        this.state = {
            baseTime: null, // Parameter, mit dem gerechnet wird
            baseTimeInput: "", // Inhalt Input (kann invalide sein)
            baseTimeString: "", // String-Repräsentation von baseTime im Format DD.MM.YYYY HH:MM:SS
            baseTimeInputValid: true,
            dateInputValid: true,

            diff: 0, // Seconds between BaseTime and TargetTime


            addends: {
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0,
                weeks: 0,
                months: 0,
                years: 0
            }
        };

        this.setBaseTimeNow = this.setBaseTimeNow.bind(this);
        this.startCalculation = this.startCalculation.bind(this);
        this.resetCalculator = this.resetCalculator.bind(this);


        // this.inputBaseTime = React.createRef(); // wird im Render gemacht
        //this.inputDateString = React.createRef();
    }

    //Focus on Input field immediately
    componentDidMount(){
        this.inputBaseTime.focus();
    }

    // handleBaseTimeChange (e) {  //<so ändert sich der scope, "this" ist nicht definiert
    handleBaseTimeChange = (e) => {
        this.setBaseTime(e.target.value * 1)
    };

    /* newBaseTime kann ein berechnet Wert sein ("now") oder ein invalider String
     */
    setBaseTime(newBaseTime) {

        let baseTime = null;
        let baseTimeInputValid = true;
        let baseTimeString = "";

        if (isValidTimestamp(newBaseTime)) {
            baseTime = newBaseTime;
            baseTimeString = formatDate(baseTime);
        } else {
            baseTime = '';
            baseTimeInputValid = false;
            newBaseTime = "";
        }

        this.setState({
            baseTime: baseTime,
            baseTimeInput: newBaseTime,
            baseTimeInputValid: baseTimeInputValid,
            baseTimeString: baseTimeString
        });
    }


    handleDateStringChange = (e) => {
        const baseTimeString = e.target.value;
//        let date = Date.parse(baseTimeString, "dd.MM.yyyy HH:mm:ss");
        let date = parseDate(baseTimeString);
        //this.setState({baseTime: e.target.value, baseTimeString: baseTimeString});

        if (date) {
            console.debug("set base time string");
            this.setBaseTime(parseInt(date.getTime() / 1000));
        } else {
            this.setState({baseTimeString: baseTimeString});
        }

    };

    startCalculation() {
        this.setState({baseTime: this.state.baseTime, baseTimeString: formatDate(this.state.baseTime)});
    }

    setBaseTimeNow() {
        //Normal:
        //this.setState({baseTime: new Date().getTime()/1000});



        //TODO: Not set state, but set input !

        // const baseTime =;
        //
        //
        // console.debug(this.inputBaseTime.current);
        const timestampNow = parseInt(new Date().getTime() / 1000);
        //this.inputBaseTime.current.value = timestampNow;
        //this.setState({baseTimeInput: timestampNow}); // setzt Input Inhalt

        this.setBaseTime(timestampNow);
        //
        // //synchronous, so start calculation will work
        // this.setState({
        //     baseTime: baseTime,
        //     baseTimeInput: baseTime
        // },() => {
        //     this.startCalculation();
        //     // console.log('new state', this.state);
        // });
    }

    resetCalculator() {

        let addends = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
            weeks: 0,
            months: 0,
            years: 0
        };
        this.setState({addends: addends}, this.recalculateTarget);
    }

    changeAddend(addend, unit) {

        let addends = this.state.addends;
        addends[unit] = addend;
        this.setState({addends: addends});

        this.recalculateTarget(); // will reset this.state.addend
    }

    recalculateTarget() {
        let change = 0;
        for (let unit in this.state.addends) {
            let val = this.state.addends[unit];
            switch(unit) {
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
                    let currentDate = new Date(this.state.baseTime * 1000);
                    let targetDate = addMonth(currentDate, val);
                    change += targetDate.getTime() / 1000 - currentDate.getTime() / 1000;
                    break;
                case 'years':
                    let currentDateY = new Date(this.state.baseTime * 1000);
                    let targetDateY = new Date(this.state.baseTime * 1000);
                    targetDateY.setFullYear(currentDateY.getFullYear() + val);
                    change += targetDateY.getTime() / 1000 - currentDateY.getTime() / 1000;
                    break;
                default:
                    break;
            }
        };

        this.setState({diff: change});
    }



    render() {


        let classNameBaseInput = this.state.baseTimeInputValid ? "form-control" : "form-control is-invalid";
        let classNameDateStringInput =  this.state.dateInputValid ? "form-control" : "form-control is-invalid";

        return (
            <div>
                <Navbar />
                <div className="container">

                    <h2>Date Tool</h2>

                    <br/>

                    <div className="row no-gutters">
                        <div className="col-3">
                            <label>Unix Timestamp</label><br/>
                            <input type="text" value={this.state.baseTimeInput != NaN ? this.state.baseTimeInput : ""}
                                   // ref={this.inputBaseTime}
                                   ref={(input) => { this.inputBaseTime = input; }}
                                   onChange={this.handleBaseTimeChange}
                                   className={classNameBaseInput}
                            />
                        </div>
                        <div className="col-1"/>
                        <div className="col-3">
                            <label>Date</label><br/>
                            <input type="text" value={this.state.baseTimeString}
                                   onChange={this.handleDateStringChange}
                                   className={classNameDateStringInput}/>
                            <i>DD.MM.YYYY HH:MM:SS</i>

                        </div>
                        <div className="col-1"/>
                        <div className="col-1">
                            <br/>
                            <button type="button" className="btn btn-primary" onClick={this.startCalculation}>calculate</button>
                        </div>
                        <div className="col-1">
                            <br/>
                            <button type="button" className="btn btn-secondary" onClick={this.setBaseTimeNow}>now</button>
                        </div>

                    </div>




                    <div className="row">
                        <div className="col">
                            <DateOutput datetime={this.state.baseTime}/>
                        </div>

                        <div className="col dateOutput">

                            <DateCalculator unit="seconds" val={this.state.addends.seconds} changeAddend={this.changeAddend.bind(this)}/>
                            <DateCalculator unit="minutes" reset={this.resetCalculator} val={this.state.addends.minutes} changeAddend={this.changeAddend.bind(this)}/>
                            <DateCalculator unit="hours" reset={this.resetCalculator} val={this.state.addends.hours} changeAddend={this.changeAddend.bind(this)}/>
                            <DateCalculator unit="days" reset={this.resetCalculator} val={this.state.addends.days} changeAddend={this.changeAddend.bind(this)}/>
                            <DateCalculator unit="weeks" reset={this.resetCalculator} val={this.state.addends.weeks} changeAddend={this.changeAddend.bind(this)}/>
                            <DateCalculator unit="months" reset={this.resetCalculator} val={this.state.addends.months} changeAddend={this.changeAddend.bind(this)}/>
                            <DateCalculator unit="years" reset={this.resetCalculator} val={this.state.addends.years} changeAddend={this.changeAddend.bind(this)}/>

                            <br/>
                            <div className="text-center">
                                <button type="button"  className="btn btn-secondary" onClick={this.resetCalculator.bind(this)}>reset</button>
                            </div>
                        </div>

                        <div className="col">
                            <DateOutput  datetime={this.state.baseTime + this.state.diff} />
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

DateTool.defaultProps = {baseTime: 0}
export default DateTool