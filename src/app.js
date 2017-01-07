import React, { Component, PropTypes } from 'react';
import Grid from './components/grid'
import Tile from './components/tile'
import { shuffle, sample, random } from 'lodash'
import {
  NUMBER_OF_COLS,
  NUMBER_OF_ROWS,
  StartTypes,
  PipeTypes,
  alphabet,
} from './constants'

const zeroArray = (n) => new Array(n).fill(0)
const startCoordinates = [
  random(1, NUMBER_OF_ROWS-2),
  random(1, NUMBER_OF_COLS-2),
]
const suitablePipeAvailable = (coordinates, direction) => {
  const [row, column] = coordinates
  const rowIndex = alphabet.indexOf(row)
  const coordinateMap = {
    NORTH: `${alphabet[rowIndex - 1]}${column}`,
    EAST: `${row}${+column + 1}`,
    SOUTH: `${alphabet[rowIndex + 1]}${column}`,
    WEST: `${row}${+column - 1}`,
  }
  const inverseDirectionMap = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  }
  const coordinateRequired = coordinateMap[direction]
  const entranceRequired = inverseDirectionMap[direction]
  return {
    coordinateRequired,
    entranceRequired,
  }
}
const startRotation = sample(Object.keys(StartTypes))

class App extends Component {

  constructor(props: object) {
    super(props)
    this.state = {
      gameEnded: false,
      controlTiles: shuffle(Object.keys(PipeTypes)),
      waterRunning: false,
      coordinateRequired: null,
      entranceRequired: null,
    }
    setInterval(() => {
      this.setState({
        waterRunning: true,
      })
    }, 1000);
    this.handleTilePlaced = this.handleTilePlaced.bind(this)
    this.handleGameEnded = this.handleGameEnded.bind(this)
    this.handleTileFlowed = this.handleTileFlowed.bind(this)
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

  handleTileFlowed(coordinates, direction) {
    const {coordinateRequired, entranceRequired } = suitablePipeAvailable(coordinates, direction);
    this.setState({
      coordinateRequired,
      entranceRequired
    })
  }

  handleTilePlaced() {
    this.setState({
      controlTiles: this.state.controlTiles
                      .concat(sample(Object.keys(PipeTypes)))
                      .slice(1)
    })
  }

  handleGameEnded() {
    this.setState({
      gameEnded: true,
    })
    console.log('The game has ended')
  }

  render() {
    const { state } = this;
    return (
      <div>
        <div className='controls'>{this.controls}</div>
        <Grid
              gameEnded={state.gameEnded}
              coordinateRequired={state.coordinateRequired}
              entranceRequired={state.entranceRequired}
              startRotation={startRotation}
              startCoordinates={startCoordinates}
              waterRunning={state.waterRunning}
              hoverTile={state.controlTiles[0]}
              handleGameEnded={this.handleGameEnded}
              handleTilePlaced={this.handleTilePlaced}
              handleTileFlowed={this.handleTileFlowed} />
      </div>
    )
  }
}

export default App;
