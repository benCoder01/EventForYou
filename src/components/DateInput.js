import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';

import areIntlLocalesSupported from 'intl-locales-supported';

import '../assets/DateInput.css';

//Get the Dateformat for the Datepicker
let DateTimeFormat;

if (areIntlLocalesSupported(['de'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/de');
}


class DateInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            startDate: "",
            endDate: "",
        }
    }

    handleInput(e){
        if(this.state.startDate !== "" && this.state.startDate !== ""){
            this.props.addDate(this.state.startDate, this.state.endDate)
        }
    }

    updateStartDate(pDate){
        this.setState((currentState) => currentState.startDate = pDate.toString());
        console.log(pDate.getMonth());
    }

    updateEndDate(pDate){
        this.setState((currentState) => currentState.endDate = pDate.toString())
    }


    render () {
        return (
            <div className="container">
                <div className="datePicker">
                <DatePicker
                  DateTimeFormat={DateTimeFormat}
                  locale="de" hintText="Start"
                  onChange={(x, date) => this.updateStartDate(date)}
                  className="item"
                />

                <DatePicker
                  DateTimeFormat={DateTimeFormat}
                  locale="de" hintText="End"
                  onChange={(x,date) => this.updateEndDate(date)}
                  className="item"
                />
                </div>

                <FloatingActionButton
                  onClick={this.handleInput.bind(this)}
                  className="item"
                  secondary={true}
                  >
                    <ContentAdd />
                </FloatingActionButton>
            </div>

        );
    }
}

export default DateInput;
