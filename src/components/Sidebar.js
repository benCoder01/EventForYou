import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  //handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Drawer
          open={this.props.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Admin Panel</MenuItem>
          <MenuItem>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
