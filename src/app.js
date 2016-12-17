import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

const zeroArray = (n) => new Array(n).fill(0);
const grid = zeroArray(7).map(n => zeroArray(10));

class App extends Component {

  constructor(props: object) {
    super(props);
  }

  get controls() {
    return zeroArray(5).map((cell, i) => {
      return (
        <div key={i} className='cell'></div>
      );
    });
  }

  get grid() {
    return grid.map(row => {
      return (
        <div className='row'>{row.map((r, i) => {
          return (
            <div key={i} className='cell'></div>
          );
        })}</div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='controls'>{this.controls}</div>
        <div className='grid'>{this.grid}</div>
      </div>
    )
  }
}

export default App;
