import React, { Component, PropTypes } from 'react'
import Square from './square'
import { isEqual } from 'lodash'
import { NUMBER_OF_COLS, NUMBER_OF_ROWS, alphabet } from '../constants'

const zeroArray = (n) => new Array(n).fill(0)
const grid = zeroArray(NUMBER_OF_ROWS).map(n => zeroArray(NUMBER_OF_COLS))

const getCoordinate = (i, j) => {
  return alphabet[i] + j;
}

class Grid extends Component {

  constructor(props) {
    super(props)
  }

  get grid() {
    const { props } = this;
    return grid.map((row, i) => {
      return (
        <div key={i} className='row'>{row.map((r, j) => {
          const coodinates = getCoordinate(i, j)
          const hasStartPipe = isEqual(props.startCoordinates, [i,j], props.startCoordinates)
          const hasWaterRunning = (hasStartPipe && props.waterReleased)
          return (
            <Square
              key={j}
              gameEnded={props.gameEnded}
              coordinateRequired={props.coordinateRequired}
              entranceRequired={props.entranceRequired}
              coordinates={coodinates}
              hasWaterRunning={hasWaterRunning}
              hasStartPipe={hasStartPipe}
              startRotation={props.startRotation}
              hoverTile={props.hoverTile}
              handleTilePlaced={props.handleTilePlaced}
              handleTileFlowed={props.handleTileFlowed}
              handleGameEnded={props.handleGameEnded}
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
  startCoordinates: PropTypes.array,
  startRotation: PropTypes.string,
  waterRunning: PropTypes.bool,
  handleTilePlaced: PropTypes.func,
  hoverTile: PropTypes.string,
}


export default Grid;
