import React, { Component, PropTypes } from 'react';
import Tile from './tile';

class Square extends Component {

  constructor(props: object) {
    super(props);
    this.state = {
      hovered: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

  render() {
    return (
      <div className='cell'
           onMouseEnter={this.handleMouseEnter}
           onMouseLeave={this.handleMouseLeave}
      >
        {this.state.hovered &&
          <Tile id={this.props.hoverTile} />
        }
      </div>
    )
  }

}

export default Square;
