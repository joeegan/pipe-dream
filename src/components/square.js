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
    this.handleMouseDown = this.handleMouseDown.bind(this);
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
    });
    this.props.handleTilePlaced();
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
          <Tile type={this.state.tile} />
        }
      </div>
    )
  }

}

export default Square;
