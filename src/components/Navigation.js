import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Info from 'material-ui/svg-icons/action/info-outline';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import '../assets/Navigation.css';



class Navigaton extends Component {

  constructor(props) {
    super(props);
    this.state = {sidebarOpen: false,
      dialogOpen: false};
  }

 handleSidebarToggle = () => this.setState({sidebarOpen: !this.state.open});

 handleSidebarClose = () => this.setState({sidebarOpen: false});

 handleInfoOpen = () => this.setState({dialogOpen: true});

 handleInfoClose = () => this.setState({dialogOpen: false});


  render() {

    const actionsDialog = [
      <FlatButton
        label="Ok"
        primary={true}
        onClick={this.handleInfoClose}
      />
    ]

    return (
      <div>
      <AppBar
        iconElementLeft={undefined}
        iconElementRight={
          <div className="infoButton">
            <FloatingActionButton
              onClick = {this.handleInfoOpen}
              secondary={true} >
                <Info />
            </FloatingActionButton>
          </div>
        }
        title="Event4You"
        onLeftIconButtonClick = {this.handleSidebarToggle}
      />
      <Drawer
        open={this.state.sidebarOpen}
        docked={false}
        onRequestChange={this.handleSidebarClose}
      >
        <h3 align="center" >Event for You</h3>
        <MenuItem>Admin Panel</MenuItem>
        <MenuItem>About</MenuItem>
      </Drawer>

      <Dialog
          title="Info"
          actions={actionsDialog}
          modal={true}
          open={this.state.dialogOpen}
      >
        This is the event planner.
        First of all you have to give your name and your Event ID.
        After that, you can select dates.
        At the end, you can give a comment.
        To finish, press the Acceptbutton at the bottom.
      </Dialog>

      </div>
    );
  }
}

export default Navigaton;
