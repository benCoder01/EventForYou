import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';


import firebase from "./firebase";

//own components
import DateInput from './components/DateInput';
import DatesList from './components/DatesList';
import Navigaton from './components/Navigation';
import UserInformation from './components/UserInformation';

import './assets/App.css';

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
      errorMessageId: "",
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
    <MuiThemeProvider >

        <Navigaton />

        <UserInformation
          errorMessageId={this.state.errorMessageId}
          errorMessageName={this.state.errorMessageName}
       	  handleName ={this.handleName.bind(this)}
	  handleId ={this.handleId.bind(this)}
	 />

        <Divider />

        <DateInput  addDate={this.updateDate.bind(this)}  />

        <DatesList
          dates={this.state.possibleDates}
          deleteRow={this.deleteRow.bind(this)}
        />
        <div className="publishDates-container">
          <div className="textInput">
          <TextField
            hintText="Your Comment here"
            multiLine = {true}
            fullWidth={true}
            onChange = {(event, newValue) => this.handleComment(event, newValue)}
          />
          </div>
          <div className="btnAccept">
          <RaisedButton
            label="Accept"
            fullWidth={true}
            onClick={(event) => this.handleAccept(event)}
            primary={true}
          />
          </div>

        </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
