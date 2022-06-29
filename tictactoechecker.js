function isSolved(board) {
  // TODO: Check if the board is solved!
  let solution = 0
  if(board.includes([1,1,1])) return solution = 1
  
  board.forEach((element,i) => {
    if (element.includes(0)) solution -1
    else if(i == 2)
  });
}