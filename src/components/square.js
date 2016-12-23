import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Square extends Component {

  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div className='cell'>
        {this.props.children}
      </div>
    )
  }

}

export default Square;
