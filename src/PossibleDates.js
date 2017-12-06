import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const selectable = false;
const data = [{id: 0, start: "3-11-2017", end: "5-11-2017"},{id: 0, start: "20-11-2017",end: "3-12-2017"}];

class PossibleDates extends Component{
  
  render() {
      return(
      //static part of table
      <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Start</TableHeaderColumn>
          <TableHeaderColumn>End</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {this.props.dates.map(n => { 
          //dynamic part of table
            return(
                <TableRow >
                  <TableRowColumn>{n.start}</TableRowColumn> 
                  <TableRowColumn>{n.end}</TableRowColumn> 
                </TableRow>
            );
        }
        )}
      </TableBody>
    </Table>
    );
  }
}

export default PossibleDates;
