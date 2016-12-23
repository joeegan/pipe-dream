import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Tile extends Component {

  render() {
    return (
      <div className='tile'>
        <span className={this.props.type}
              style={{
                opacity: this.props.hovered ? 0.4 : 1,
                background: this.props.hovered ? 'blue' : 'lightgreen',
                zIndex: this.props.hovered ? 1 : 0,
              }}
        ></span>
      </div>
    )
  }
}

export default Tile;
