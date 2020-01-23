import React from "react";

export class DateCalculator extends React.Component {

    //this.props.baseTime = 0;
    constructor(props) {
        super(props);

        this.addendPlus = this.addendPlus.bind(this);
        this.addendMinus = this.addendMinus.bind(this);
    }


    addendPlus() {
        let newStateAddend = this.props.val + 1;

        this.props.changeAddend(newStateAddend, this.props.unit);
    }

    addendMinus() {
        let newStateAddend = this.props.val - 1;
        this.props.changeAddend(newStateAddend, this.props.unit);
    }

    render() {

        let stringPlus = this.props.val > 0 ? ("+" + this.props.val) : " ";
        let stringMinus = this.props.val < 0 ? (this.props.val) : " ";

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-secondary" onClick={this.addendMinus}>-</button>
                    </div>
                    <div className="col font-weight-bold">
                        {stringMinus}
                    </div>
                    <div className="col text-center">
                        {this.props.unit}
                    </div>
                    <div className="col font-weight-bold">
                        {stringPlus}
                    </div>
                    <div className="col text-right" >
                        <button type="button" className="btn btn-secondary" onClick={this.addendPlus}>+</button>
                    </div>
                </div>


            </div>
        );
    }
}


export default DateCalculator