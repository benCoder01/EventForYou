import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import DeleteItemSvg from 'material-ui/svg-icons/action/highlight-off'
import Paper from 'material-ui/Paper';

import '../assets/DatesList.css';

class DatesList extends Component{

  render() {
      return(
      <Paper zDepth={2} className="container">
        <Table>

          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Start</TableHeaderColumn>
              <TableHeaderColumn>End</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
      
          <TableBody displayRowCheckbox={false}>
            {this.props.dates.map(n => {
                return(
                    <TableRow >
                      <TableRowColumn>{n.start}</TableRowColumn>
                      <TableRowColumn>{n.end}</TableRowColumn>
                      <TableRowColumn>
                        <IconButton onClick = {(event) => this.props.deleteRow(n)}>
                          <DeleteItemSvg />
                        </IconButton>
                      </TableRowColumn>
                    </TableRow>
                );
            })}
          </TableBody>

      </Table>
    </ Paper>
    );
  }
}

export default DatesList;
