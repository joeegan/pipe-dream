import React, { Component, PropTypes } from 'react'
import { PipeTypes } from '../constants'
import _ from 'lodash'

class Tile extends Component {

  render() {
    const pipeClassName= `pipe ${this.props.type}`
    const waterRunningClassName = `water ${this.props.waterRunning ? 'running' : ''}`
    return (
      <div className='tile'
           style={{
                opacity: this.props.hovered ? 0.4 : 1,
                background: this.props.hovered ? 'blue' : 'lightgreen',
                zIndex: this.props.hovered ? 1 : 0,
              }}
      >
        <span className={pipeClassName}>
          <span className={waterRunningClassName} />
        </span>
        {this.props.type === 'CROSS' &&
          <span className={pipeClassName} />
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
