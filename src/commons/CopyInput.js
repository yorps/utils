import React, { Component } from 'react';

export default class CopyInput extends Component {
    copyText = () => {
        this.refs.input.select();

        document.execCommand('copy');

        return false;
    }

    render () {
        const text = this.props.text;

        console.debug(this.state);
        return (

            <div className="input-group input-group-sm mb-3" style={{width:'195px'}}>
                <input ref="input" type="text" defaultValue={text} readOnly className="form-control form-control-sm" 
                aria-label="date"/>
                <div className="input-group-append">
                    <button className="btn btn-sm btn-outline-secondary" type="button" onClick={ this.copyText }>copy</button>
                </div>
             </div>
             


        )
    }
}

