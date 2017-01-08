import React, { Component, PropTypes } from 'react';
import Tile from './tile';
import { InverseDirectionMap } from '../constants'

class Square extends Component {

  constructor(props: object) {
    super(props)
    this.state = {
      hovered: false,
      hasWaterRunning: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleTileFlowed = this.handleTileFlowed.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { props, state } = this
    if (props.hasStartPipe && nextProps.hasWaterRunning) {
      this.setState({
        hasWaterRunning: true
      })
      return;
    }
    if (nextProps.coordinateRequired !== props.coordinates) {
      return;
    }

    if ((nextProps.coordinateRequired == props.coordinates)
      && !state.tile
      && !props.gameEnded
    ) {
      props.handleGameEnded();
    } else {
      this.setState({
        hasWaterRunning: true
      })
    }
  }

  handleMouseEnter() {
    this.setState({
      hovered: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      hovered: false,
    });
  }

  handleMouseDown() {
    this.setState({
      tile: this.props.hoverTile,
    })
    this.props.handleTilePlaced();
  }

  handleTileFlowed(coordinates, direction) {
    this.setState({
      tileFlowed: true,
      historicEntranceRequired: this.props.entranceRequired,
    })
    this.props.handleTileFlowed(coordinates, direction);
  }

  get exitDirection(){
    return this.props.type
  }

  render() {
    const { props, state } = this
    return (
      <div
        className='cell'
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {state.hovered &&
          <Tile hovered={true} type={props.hoverTile} />
        }
        {state.tile &&
          <Tile
            gameEnded={props.gameEnded}
            coordinates={props.coordinates}
            coordinatesRequired={props.coordinatesRequired}
            waterEntranceDirection={props.entranceRequired  || this.state.historicEntranceRequired}
            handleTileFlowed={this.handleTileFlowed}
            hasWaterRunning={state.hasWaterRunning}
            hovered={false}
            exitDirection={this.exitDirection}
            type={state.tile}
          />
        }
        {props.hasStartPipe &&
          <Tile
            gameEnded={props.gameEnded}
            waterEntranceDirection={InverseDirectionMap[props.startRotation]}
            exitDirection={props.startRotation}
            coordinates={props.coordinates}
            hasWaterRunning={state.hasWaterRunning}
            handleTileFlowed={this.handleTileFlowed}
            hovered={false}
            type={props.startRotation}
          />
        }
      </div>
    )
  }

}

Square.propTypes = {
  startRotation: PropTypes.string,
  hasStartPipe: PropTypes.bool,
  hoverTile: PropTypes.string,
}

export default Square;
