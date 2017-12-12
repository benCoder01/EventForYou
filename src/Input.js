import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';
import './Style.css'
import { Paper } from 'material-ui/Paper';


class Input extends Component {
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
        this.setState((currentState) => currentState.startDate = pDate.toString())
    }

    updateEndDate(pDate){
        this.setState((currentState) => currentState.endDate = pDate.toString())
    }
    render () {
        return (
            
            <div className="inputDates">
                <DatePicker hintText="Start" onChange={(x, date) => this.updateStartDate(date)} className="dateInput"/>
                <DatePicker hintText="End" onChange={(x,date) => this.updateEndDate(date)} className="dateInput"/>

                <FloatingActionButton onClick={this.handleInput.bind(this)} className="dateInput">
                    <ContentAdd />
                </FloatingActionButton>
            </div>
            
        );
    }
}

export default Input;
