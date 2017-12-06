import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PossibleDates from './PossibleDates'
import RaisedButton from 'material-ui/RaisedButton';
import Input from './Input';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {possibleDates: []}; 
  }
  
  updateDate = (dateStart, dateEnd) => (    
    console.log(typeof(dateStart))
    //this.setState((currentState) => currentState.possibleDates.push({start: dateStart, end: {dateEnd}}))   
    );

  render() {
    
    return (
      <MuiThemeProvider>
        <Input addDate={this.updateDate.bind(this)} />
        <PossibleDates dates={this.state.possibleDates}/>
        <RaisedButton label="Accept" fullWidth={true} />
      </MuiThemeProvider>
    );
  }
}

export default App;

