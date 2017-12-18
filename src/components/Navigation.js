import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class Navigaton extends Component {

  constructor(props) {
    super(props);
    this.state = {open: this.props.open};
  }

 handleToggle = () => this.setState({open: !this.state.open});

 handleClose = () => this.setState({open: false});


  render() {
    return (
      <div>
      <AppBar
        iconElementLeft={undefined}
        title="Event4You"
        onLeftIconButtonClick = {(event) => this.handleToggle()}
      />
      <Drawer
        open={this.state.open}
        docked={false}
        onRequestChange={(open) => this.handleToggle()}
        overlayClassName="test"
      >
        <h3 align="center" >Event for You</h3>
        <MenuItem>Admin Panel</MenuItem>
        <MenuItem>About</MenuItem>
      </Drawer>
      </div>
    );
  }
}

export default Navigaton;
