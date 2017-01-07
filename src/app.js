import React, { Component, PropTypes } from 'react'
import Grid from './components/grid'
import Tile from './components/tile'
import { shuffle, sample, random } from 'lodash'
import {
  NUMBER_OF_COLS,
  NUMBER_OF_ROWS,
  StartTypes,
  PipeTypes,
  InverseDirectionMap,
  alphabet,
} from './constants'

const zeroArray = (n) => new Array(n).fill(0)
const startCoordinates = [
  random(1, NUMBER_OF_ROWS-2),
  random(1, NUMBER_OF_COLS-2),
]

const startRotation = sample(Object.keys(StartTypes))

function getRequiredCoordinate(coordinates, direction) {
  const [row, column] = coordinates
  const rowIndex = alphabet.indexOf(row)
  const coordinateMap = {
    NORTH: `${alphabet[rowIndex - 1]}${column}`,
    EAST: `${row}${+column + 1}`,
    SOUTH: `${alphabet[rowIndex + 1]}${column}`,
    WEST: `${row}${+column - 1}`,
  }
  return coordinateMap[direction]
}

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
    setTimeout(() => {
      this.setState({
        waterReleased: true,
      })
      console.log('water released')
    }, 1000)
    this.handleTilePlaced = this.handleTilePlaced.bind(this)
    this.handleTileFlowed = this.handleTileFlowed.bind(this)
    this.handleGameEnded = this.handleGameEnded.bind(this)
  }

  handleTileFlowed(coordinates, direction) {
    this.setState({
      coordinateRequired: getRequiredCoordinate(coordinates, direction),
      entranceRequired: InverseDirectionMap[direction],
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

  get controlTiles() {
    return this.state.controlTiles.map((cell, i) => {
      return (
        <div key={i} className='cell'>
          <Tile type={cell} />
        </div>
      )
    })
  }

  render() {
    const { state } = this
    return (
      <div>
        <div className='controls'>{this.controlTiles}</div>
        <Grid gameEnded={state.gameEnded}
              coordinateRequired={state.coordinateRequired}
              entranceRequired={state.entranceRequired}
              startRotation={startRotation}
              startCoordinates={startCoordinates}
              waterReleased={state.waterReleased}
              hoverTile={state.controlTiles[0]}
              handleGameEnded={this.handleGameEnded}
              handleTilePlaced={this.handleTilePlaced}
              handleTileFlowed={this.handleTileFlowed} />
      </div>
    )
  }
}

export default App;
