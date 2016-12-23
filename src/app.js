import React, { Component, PropTypes } from 'react';
import Grid from './components/grid'
import Tile from './components/tile'
import _ from 'lodash'
import { PipeTypes } from './constants'

const zeroArray = (n) => new Array(n).fill(0)

class App extends Component {

  constructor(props: object) {
    super(props)
    this.state = {
      controlTiles: _.shuffle(Object.keys(PipeTypes)),
    }
    this.handleTilePlaced = this.handleTilePlaced.bind(this)
  }

  get controls() {
    return this.state.controlTiles.map((cell, i) => {
      return (
        <div key={i} className='cell'>
          <Tile
            type={cell}
          />
        </div>
      )
    })
  }

  handleTilePlaced() {
    this.setState({
      controlTiles: this.state.controlTiles
                      .concat(_.sample(Object.keys(PipeTypes)))
                      .slice(1)
    })
  }

  render() {
    return (
      <div>
        <div className='controls'>{this.controls}</div>
        <Grid hoverTile={this.state.controlTiles[0]}
              handleTilePlaced={this.handleTilePlaced} />
      </div>
    )
  }
}

export default App;
