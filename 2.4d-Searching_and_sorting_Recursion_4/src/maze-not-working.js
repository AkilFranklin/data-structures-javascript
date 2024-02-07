// /**
//  * Return a string representing the path through the maze.
//  * @param {array} maze
//  * @param {array} index The starting point
//  */
// function mazeSolver(maze, index = [0, 0]) {
//     let currRow = index[0];
//     let currCol = index[1];
//     console.log(maze);
//     console.log(currRow, currCol);

//     if (maze[currRow][currCol] === 'e') {
//         return "";
//     }

//     else if (currRow - 1 >= 0 && maze[currRow - 1][currCol] !== "*") { // moving up
//         maze[currRow][currCol] = "*";
//         currRow -= 1;
//         return "U" + mazeSolver(maze, [currRow, currCol])
//     }

//     else if (currRow + 1 < maze.length && maze[currRow + 1][currCol] !== "*") { // moving down
//         maze[currRow][currCol] = "*";
//         currRow += 1;
//         return "D" + mazeSolver(maze, [currRow, currCol])
//     }

//     else if (currCol - 1 >= 0 && maze[currRow][currCol - 1] !== "*") { // moving left
//         maze[currRow][currCol] = "*";
//         currCol -= 1;
//         return "L" + mazeSolver(maze, [currRow, currCol])
//     }

//     else if (currCol + 1 < maze[currRow].length && maze[currRow][currCol + 1] !== "*") { // moving right
//         maze[currRow][currCol] = "*";
//         currCol += 1;
//         return "R" + mazeSolver(maze, [currRow, currCol])
//     }
//     // return "No path found"
// }

// module.exports = mazeSolver;


/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
    function isValid(row, col, mazeLength, maze) {
      return row >= 0 && col >= 0 && row < mazeLength && col < mazeLength && maze[row][col] === " ";
    }
  
    function findPath(row, col, maze, mazeLength, ans, currentPath) {
      if (maze[row][col] === 'e') {
        ans.push(currentPath.slice());
        console.log(ans)
        return;
      }
  
      maze[row] = 0;
  
      for (let i = 0; i < 4; i++) {
        let nextr = row + dr[i];
        let nextc = col + dc[i];
        if (isValid(nextr, nextc, mazeLength, maze)) {
          currentPath.push(direction.charAt(i));
          console.log(currentPath)
          findPath(nextr, nextc, maze, mazeLength, ans, currentPath);
          currentPath.pop();
        }
      }
  
      maze[row] = 1;
    }
  
    // let maze = [
    //   [1, 0, 0, 0],
    //   [1, 1, 0, 1],
    //   [1, 1, 0, 0],
    //   [0, 1, 1, 1],
    // ];
  
    let direction = "DLRU";
    let dr = [1, 0, 0, -1];
    let dc = [0, -1, 1, 0];
    let row = index[0];
    let col = index[1];
    let mazeLength = maze.length;
    let result = [];
    let currentPath = [];
  
    findPath(row, col, maze, mazeLength, result, currentPath);
  
    if (result.length === 0) {
      console.log(-1);
    } else {
      result.forEach((path) => console.log(path.join("") + " "));
    }
  }
  
  module.exports = mazeSolver;
  