import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';
import './App.css'


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
            <div >
                <DatePicker hintText="Start" onChange={(x, date) => this.updateStartDate(date)}/>
                <DatePicker hintText="End" onChange={(x,date) => this.updateEndDate(date)}/>

                <FloatingActionButton onClick={this.handleInput.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default Input;
