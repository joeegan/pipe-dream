import React, { Component, PropTypes } from 'react';
import Tile from './tile';

class Square extends Component {

  constructor(props: object) {
    super(props)
    this.state = {
      hovered: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleTileFlowed = this.handleTileFlowed.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coordinateRequired
      && !this.state.tile
      && !this.props.gameEnded
    ) {
      this.props.handleGameEnded();
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

  handleTileFlowed() {
    this.setState({
      tileFlowed: true,
    })
    this.props.handleTileFlowed();
  }

  get exitDirection(){
    return this.props.type
  }

  render() {
    return (
      <div className='cell'
           onMouseDown={this.handleMouseDown}
           onMouseEnter={this.handleMouseEnter}
           onMouseLeave={this.handleMouseLeave}
      >
        {this.state.hovered &&
          <Tile hovered={true} type={this.props.hoverTile} />
        }
        {this.state.tile &&
          <Tile
            gameEnded={this.props.gameEnded}
            coordinates={this.props.coordinates}
            handleTileFlowed={this.handleTileFlowed}
            hovered={false}
            exitDirection={this.exitDirection}
            type={this.state.tile}
          />
        }
        {this.props.hasStartPipe &&
          <Tile
            gameEnded={this.props.gameEnded}
            exitDirection={this.props.startRotation}
            coordinates={this.props.coordinates}
            waterRunning={this.props.waterRunning}
            handleTileFlowed={this.props.handleTileFlowed}
            hovered={false}
            type={this.props.startRotation}
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
