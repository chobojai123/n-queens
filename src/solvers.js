/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var result = [];

  // loop through rows and columnss 
  var matrix = solution.rows();
  for(var row = 0; row < n; row ++){
    for(var col = 0; col < n; col ++){
      solution.togglePiece(row, col);
        if(solution.hasAnyRooksConflicts()){
          solution.togglePiece(row, col);
        }        
      }
    }
  for(var i = 0; i < n; i++){
    result.push(matrix[i]);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return result;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other



window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme  
  var solution = new Board({n: n});

  var countRow = function(rowIndex){
    if(rowIndex === n){
      solutionCount++;
      return;
    }

    for(var col = 0; col < n; col ++){
      solution.togglePiece(rowIndex, col);
      if(!solution.hasAnyRooksConflicts()){
       countRow(rowIndex +1);
      }
      solution.togglePiece(rowIndex, col);   
    }
  }
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  countRow(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;
  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return {n: n};
  }

  var countRow = function(rowIndex) {
    rowIndex = rowIndex || 0;
    if(rowIndex === n){
      solution = [];
      for(var row = 0; row < n; row++){
        solution.push(board.rows()[row].slice());
      }
      return;
    }
    for(var col = 0; col < n; col ++) {
      board.togglePiece(rowIndex, col);
      if(!board.hasAnyQueensConflicts()) {
       countRow(rowIndex +1);
      }
      board.togglePiece(rowIndex, col);   
    }
  }
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  countRow();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme  
  var solution = new Board({n: n});
  var countRow = function(rowIndex){
    if(rowIndex === n){
    solutionCount++;
    return;
    }
    for(var col = 0; col < n; col ++){
      solution.togglePiece(rowIndex, col);
      if(!solution.hasAnyQueensConflicts()){
       countRow(rowIndex +1);
      }
      solution.togglePiece(rowIndex, col);   
    }
  }
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  countRow(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};







