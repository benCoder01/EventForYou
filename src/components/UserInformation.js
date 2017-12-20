import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import '../assets/UserInformation.css';


class UserInformation extends Component {
  render() {
    return(
      <div className="container">
         <TextField
            className="textField"
            hintText="Name"
            multiLine={false}
            fullWidth={false}
            onChange={(event, newValue) => this.props.handleName(event, newValue)}
            errorText={this.props.errorMessageName}
          />

          <TextField
            className="textField"
            hintText="Event Id"
            multiLine={false}
            fullWidth={false}
            onChange={(event, newValue) => this.props.handleId(event, newValue)}
            errorText={this.props.errorMessageId}
          />
        </div>
    );
  }
}

export default UserInformation;
