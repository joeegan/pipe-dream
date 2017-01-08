import React, { Component, PropTypes } from 'react'
import {
  PipeTypes,
  PipeTypesFromDirection,
  FlowDirectionFromWaterEntrance
} from '../constants'

class Tile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      waterHasFlowed: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.gameEnded
      && nextProps.hasWaterRunning
      && !this.state.waterHasFlowed) {
      setTimeout(() => {
        this.props.handleTileFlowed(this.props.coordinates, this.props.exitDirection)
        this.setState({
          waterHasFlowed: true,
        })
        console.log('tile has finished flowing')
      }, 1000)
    }
  }

  get waterRunningClassName() {
    return `water ${this.props.hasWaterRunning ? 'running ' : ''}`
  }

  get firstWaterRunningClassName() {
    const { waterEntranceDirection, type } = this.props
    const [firstPipeType] = PipeTypesFromDirection[type]
    if (waterEntranceDirection && FlowDirectionFromWaterEntrance[waterEntranceDirection][firstPipeType]) {
      debugger;
      return this.waterRunningClassName
        + FlowDirectionFromWaterEntrance[waterEntranceDirection][firstPipeType]
    }
  }

  get secondWaterRunningClassName() {
    const { waterEntranceDirection, type } = this.props
    const [, secondPipeType] = PipeTypesFromDirection[type]
    if (waterEntranceDirection && FlowDirectionFromWaterEntrance[waterEntranceDirection][secondPipeType]) {
      return this.waterRunningClassName
        + FlowDirectionFromWaterEntrance[waterEntranceDirection][secondPipeType]
    }

  }

  render() {
    const { props } = this
    const [firstPipeType, secondPipeType] = PipeTypesFromDirection[props.type]
    return (
      <div className={`tile ${props.hovered ? 'hovered' : ''}`}>
        <span className={`pipe ${firstPipeType}`}>
          <span className={this.firstWaterRunningClassName} />
        </span>
        {secondPipeType &&
          <span className={`pipe ${secondPipeType}`}>
            <span className={this.secondWaterRunningClassName} />
          </span>
        }
      </div>
    )
  }
}

Tile.propTypes = {
  type: PropTypes.string,
  hovered: PropTypes.bool,
  waterRunning: PropTypes.bool,
  waterEntranceDirection: PropTypes.string,
}

export default Tile;
