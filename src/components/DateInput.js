import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';

import areIntlLocalesSupported from 'intl-locales-supported';

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
            <div className="inputDates">
                <DatePicker
                  DateTimeFormat={DateTimeFormat}
                  locale="de" hintText="Start"
                  onChange={(x, date) => this.updateStartDate(date)}
                  className="dateInput"
                />

                <DatePicker
                  DateTimeFormat={DateTimeFormat}
                  locale="de" hintText="End"
                  onChange={(x,date) => this.updateEndDate(date)}
                  className="dateInput"
                />

                <FloatingActionButton onClick={this.handleInput.bind(this)} className="dateInput">
                    <ContentAdd />
                </FloatingActionButton>
            </div>

        );
    }
}

export default DateInput;
