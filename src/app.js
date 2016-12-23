import React, { Component, PropTypes } from 'react';
import Grid from './components/grid'
import Tile from './components/tile'
import _ from 'lodash';
import pipeTypes from './pipe-types';

const zeroArray = (n) => new Array(n).fill(0);

class App extends Component {

  constructor(props: object) {
    super(props);
    this.state = {
      controlTiles: _.shuffle((pipeTypes)),
    };
  }

  get controls() {
    return this.state.controlTiles.map((cell, i) => {
      return (
        <div key={i} className='cell'>
          <Tile
            id={cell}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='controls'>{this.controls}</div>
        <Grid hoverTile={this.state.controlTiles[0]} />
      </div>
    )
  }
}

export default App;
