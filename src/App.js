import React, { Component } from 'react';
import './Style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PossibleDates from './PossibleDates'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Input from './Input';
import firebase from "./firebase";


const db = firebase.firestore();
const events = db.collection("events").doc("events");

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      possibleDates: [], 
      name: "", 
      comment: "",
      id: "",
      errorMessageName: "",
      errorMessageId: ""
    }; 
  }


  deleteRow = (element) => {

    var newDateArray = this.state.possibleDates;
    var indexOfElement = newDateArray.indexOf(element);
    delete newDateArray[indexOfElement];
    console.log(indexOfElement)

    this.setState({possibleDates: newDateArray});
    this.setState((currentState) => {
      currentState.possibleDates = newDateArray;
    });
    
  }

  updateDate = (dateStart, dateEnd) => (    
    this.setState((currentState) => currentState.possibleDates.push({start: dateStart, end: dateEnd}))   
  );

  handleAccept(e){
    if(this.state.name !== "" && this.state.id !== ""){
      events.collection(this.state.id).add({
        name: this.state.name,
        comment: this.state.comment,
        dates: this.state.possibleDates
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });

      this.setState({errorMessageId: "", errorMessageName: ""});

    }else{
      if(this.state.name === "") this.setState({errorMessageName: "Name is missing"})
      if(this.state.id === "") this.setState({errorMessageId: "Event-Id is missing"})

    }

  }

  handleName = (e, text) => this.setState({name: text})

  handleComment = (e, text) => this.setState({comment: text})

  handleId = (e, text) => this.setState({id: text}) 

  render() {
    return (
      <MuiThemeProvider>
         <AppBar
            iconElementLeft={undefined}
            title="Event4You"
          />
        <div className="inputNameId"> 
        
        <TextField 
          className="textField"
          hintText="Name" 
          multiLine={false} 
          fullWidth={false} 
          onChange={(event, newValue) => this.handleName(event, newValue)} 
          errorText={this.state.errorMessageName}
        />
        <TextField 
          className="textField"
          hintText="Event Id" 
          multiLine={false} 
          fullWidth={false} 
          onChange={(event, newValue) => this.handleId(event, newValue)} 
          errorText={this.state.errorMessageId}
        />
        </div>

        <Input  addDate={this.updateDate.bind(this)}  />
        <PossibleDates dates={this.state.possibleDates} deleteRow={this.deleteRow.bind(this)} />
        
        <TextField 
          hintText="Your Comment here" 
          multiLine = {true} 
          fullWidth={true}
          onChange = {(event, newValue) => this.handleComment(event, newValue)}
        />
        <RaisedButton label="Accept" fullWidth={true} onClick={(event) => this.handleAccept(event)} />
    
      </MuiThemeProvider>
      
    );
  }
}

export default App;

