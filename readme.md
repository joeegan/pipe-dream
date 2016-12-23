Pipe dream clone


Main tasks -

* Water flow game management:

Every n seconds check if water can flow, if not game ends

Currently the easiest place to drop this in is Grid as
* it can handle actions from the squares
* it can send `waterRunning` to the correct square

psuedo-code:
```js
evaluateWhetherWaterCanFlow(currentFlowingPipeTypeExitString) {
  exit = currentFlowingPipeTypeExitString // south
  if (exit == 'south' && grid[squareToSouth] && grid[squareToSouth].has('north')) {
    addWaterClassTo(grid[squareToSouth])
    currentFlowingPipeType = grid[squareToSouth]
    currentFlowingPipeTypeExitString = (not north)
    increaseScore();
    evaluateWhetherWaterCanFlow(currentFlowingPipeTypeExitString) // recurse
  } else {
    gameEnd()
  }
}

* Animating water around the curves as they are clipped full rectangles
