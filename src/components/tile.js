import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Tile extends Component {

  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div className='tile'>
        <span className={this.props.type}></span>
      </div>
    )
  }
}

export default Tile;
