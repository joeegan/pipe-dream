import React, { Component, PropTypes } from 'react'
import { PipeTypes } from '../constants'

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

  render() {
    const firstPipeClassName= `pipe ${this.props.type}`
    const secondPipeClassName= `pipe ${this.props.type}`
    const waterRunningClassName = `water ${this.props.hasWaterRunning ? 'running' : ''}`
    return (
      <div className='tile'
           style={{
                opacity: this.props.hovered ? 0.4 : 1,
                background: this.props.hovered ? 'blue' : 'lightgreen',
                zIndex: this.props.hovered ? 1 : 0,
              }}
      >
        <span className={firstPipeClassName}>
          <span className={waterRunningClassName} />
        </span>
        {!this.props.type.match(/^(VERTICAL|HORIZONTAL|NORTH|EAST|SOUTH|WEST)$/g) &&
          <span className={secondPipeClassName}>
            <span className={waterRunningClassName} />
          </span>
        }
      </div>
    )
  }
}

Tile.propTypes = {
  type: React.PropTypes.string,
  hovered: React.PropTypes.bool,
  waterRunning: React.PropTypes.bool,
}

export default Tile;
