function mazeSolver(maze, currentPosition = [0, 0]) {
    const [row, col] = currentPosition;
  
    // Check if the current position is outside the boundaries of the maze
    if (row < 0 || col < 0 || row >= maze.length || col >= maze[0].length) {
      return -1;
    }
  
    // Check if the current position is the exit
    if (maze[row][col] === "e") {
      return [];
    }
  
    // Check if the current position is a blocked cell or already visited cell
    if (maze[row][col] === "*" || maze[row][col] === "x") {
      return -1;
    }
  
    // Mark the current cell as visited
    maze[row][col] = "x";
  
    // Explore all possible directions: Right, Down, Left, Up
      console.log(1);
    const rightPath = mazeSolver(maze, [row, col + 1]);
      console.log(2);
    const downPath = mazeSolver(maze, [row + 1, col]);
      console.log(3);	
    const leftPath = mazeSolver(maze, [row, col - 1]);
      console.log(4);	
    const upPath = mazeSolver(maze, [row - 1, col]);
      console.log(5);	
  
    // If any valid path is found, return the current position along with the path
    if (rightPath !== -1) {
      return "R" + rightPath;
    } else if (downPath !== -1) {
      return "D" + downPath;
    } else if (leftPath !== -1) {
      return "L" + leftPath;
    } else if (upPath !== -1) {
      return "U" + upPath;
    } else {
      // If no path is found, backtrack and mark the current cell as unvisited
      maze[row][col] = " ";
      return -1;
    }
  }
  
  module.exports = mazeSolver;
  