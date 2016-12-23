import React, { Component, PropTypes } from 'react'
import Square from './square'
import _ from 'lodash'
import { StartTypes } from '../constants'

const NUMBER_OF_COLS = 10
const NUMBER_OF_ROWS = 7

const zeroArray = (n) => new Array(n).fill(0)
const grid = zeroArray(NUMBER_OF_ROWS).map(n => zeroArray(NUMBER_OF_COLS))
const startCoordinates = [
  _.random(1, NUMBER_OF_ROWS-2),
  _.random(1, NUMBER_OF_COLS-2),
]
const startRotation = _.sample(Object.keys(StartTypes))

class Grid extends Component {

  get grid() {
    return grid.map((row, i) => {
      return (
        <div key={i} className='row'>{row.map((r, j) => {
          return (
            <Square
              waterRunning={this.props.waterRunning}
              hasStartPipe={_.isEqual(startCoordinates, [i,j], startCoordinates)}
              startRotation={startRotation}
              hoverTile={this.props.hoverTile}
              handleTilePlaced={this.props.handleTilePlaced}
              key={j}
            >
            </Square>
          )
        })}</div>
      )
    })
  }

  render() {
    return (
      <div className='grid'>{this.grid}</div>
    )
  }

}

Grid.propTypes = {
  waterRunning: PropTypes.bool,
  handleTilePlaced: PropTypes.func,
  hoverTile: PropTypes.string,
}


export default Grid;
