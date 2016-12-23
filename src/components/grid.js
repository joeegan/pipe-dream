import React, { Component, PropTypes } from 'react';
import Square from './square';

const zeroArray = (n) => new Array(n).fill(0);
const grid = zeroArray(7).map(n => zeroArray(10));

class Grid extends Component {

  constructor(props: object) {
    super(props);
  }

  get grid() {
    return grid.map((row, i) => {
      return (
        <div key={i} className='row'>{row.map((r, j) => {
          return (
            <Square hoverTile={this.props.hoverTile} key={j}>
            </Square>
          );
        })}</div>
      );
    });
  }

  render() {
    return (
      <div className='grid'>{this.grid}</div>
    )
  }
}

export default Grid;
