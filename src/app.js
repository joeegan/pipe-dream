import React, { Component, PropTypes } from 'react';
import Grid from './components/grid'
import Tile from './components/tile'
import _ from 'lodash';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const zeroArray = (n) => new Array(n).fill(0);

let position = [0, 0];
let observer = null;

function emitChange() {
  observer(position);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();

  return () => {
    observer = null;
  };
}

export function move(toX, toY) {
  position = [toX, toY];
  emitChange();
}

export function canMove(toX, toY) {
  return true;
}

class App extends Component {

  constructor(props: object) {
    super(props);
    this.unobserve = observe(this.handleChange.bind(this));
  }

  componentWillUnmount() {
    this.unobserve();
  }

  handleChange(position) {
    const nextState = { position };
    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = nextState;
    }
  }

  get controls() {
    return zeroArray(5).map((cell, i) => {
      return (
        <div key={i} className='cell'>
          <Tile
            id={i}
            handleChange={this.handleChange.bind(this)}
          />
        </div>
      );
    });
  }

  render() {
    const { position } = this.state;
    return (
      <div>
        <div className='controls'>{this.controls}</div>
        <Grid tilePosition={this.props.tilePosition} />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);
