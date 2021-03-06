export const PipeTypes = [
  'VERTICAL',
  'HORIZONTAL',
  'SOUTH_EAST',
  'SOUTH_WEST',
  'NORTH_EAST',
  'NORTH_WEST',
  'CROSS',
]

export const PipeTypesFromDirection = {
  EAST: ['EAST'],
  SOUTH: ['SOUTH'],
  NORTH: ['NORTH'],
  WEST: ['WEST'],
  VERTICAL: ['VERTICAL'],
  HORIZONTAL: ['HORIZONTAL'],
  SOUTH_EAST: ['SOUTH', 'EAST'],
  SOUTH_WEST: ['SOUTH', 'WEST'],
  NORTH_EAST: ['NORTH', 'EAST'],
  NORTH_WEST: ['NORTH', 'WEST'],
  CROSS: ['VERTICAL', 'HORIZONTAL'],
}

export const FlowDirectionFromWaterEntrance = {
  NORTH: { /* water has entered from */
    VERTICAL: 'flow_south', /* into a pipe type */
    NORTH: 'flow_south',
    SOUTH: 'flow_south',
  },
  EAST: {
    HORIZONTAL: 'flow_west',
    WEST: 'flow_west',
    EAST: 'flow_west',
  },
  SOUTH: {
    VERTICAL: 'flow_north',
    NORTH: 'flow_north',
    SOUTH: 'flow_north',
  },
  WEST: {
    HORIZONTAL: 'flow_east',
    EAST: 'flow_east',
    WEST: 'flow_east',
  },
}

export const InverseDirectionMap = {
  NORTH: 'SOUTH',
  EAST: 'WEST',
  SOUTH: 'NORTH',
  WEST: 'EAST',
}

export const StartTypes = [
  'NORTH',
  'EAST',
  'SOUTH',
  'WEST',
]

export const NUMBER_OF_COLS = 5
export const NUMBER_OF_ROWS = 5

export const alphabet = 'abcdefghijklmnopqrstuvwxyz'
