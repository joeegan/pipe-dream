import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Tile extends Component {

  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div className='tile'>
        <span className='numero'>{this.props.id}</span>
      </div>
    )
  }
}

export default Tile;
