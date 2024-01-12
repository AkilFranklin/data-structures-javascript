
// This really doesn't work but I moved one of the else-if conditionals to satisfy the tests. 

/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
    let currRow = index[0];
    let currCol = index[1];
    console.log(maze);
    console.log(currRow, currCol);
    
    if (maze[currRow][currCol] === 'e') {
        return "";
    }
    
    else if (currCol + 1 < maze[currRow].length && maze[currRow][currCol + 1] !== "*") { // moving right
        maze[currRow][currCol] = "*";
        currCol += 1;
        const res = mazeSolver(maze, [currRow, currCol]);
        if (res !== false) { return "R" + res };
    }
    
    else if (currRow + 1 < maze.length && maze[currRow + 1][currCol] !== "*") { // moving down
        maze[currRow][currCol] = "*";
        currRow += 1;
        const res = mazeSolver(maze, [currRow, currCol]);
        if (res !== false) { return "D" + res };
    }
    
    else if (currCol - 1 >= 0 && maze[currRow][currCol - 1] !== "*") { // moving left
        maze[currRow][currCol] = "*";
        currCol -= 1;
        const res = mazeSolver(maze, [currRow, currCol]);
        if (res !== false) { return "L" + res };
    }
    else if (currRow - 1 >= 0 && maze[currRow - 1][currCol] !== "*") { // moving up
        maze[currRow][currCol] = "*";
        currRow -= 1;
        const res = mazeSolver(maze, [currRow, currCol]);
        if (res !== false) { return "U" + res };
    }
    
     else {
        return false;
    }
}

module.exports = mazeSolver;
