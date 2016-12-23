import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Tile extends Component {

  render() {
    const pipeClassName= `pipe ${this.props.type}`
    return (
      <div className='tile'
           style={{
                opacity: this.props.hovered ? 0.4 : 1,
                background: this.props.hovered ? 'blue' : 'lightgreen',
                zIndex: this.props.hovered ? 1 : 0,
              }}
      >
        <span className={pipeClassName} />
        {this.props.type == 'CROSS' &&
          <span className={pipeClassName} />
        }
      </div>
    )
  }
}

export default Tile;
