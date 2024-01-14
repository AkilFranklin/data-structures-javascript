/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
    let path = [index];
// 	let visitedSet = new Set();
	dfs(maze, index);
	return path;
	
    function dfs(maze, index) {
        if (isEndOfMaze(index)) {
            return;
        }
		
		console.log(path);

		
		if (path.length === 0) { return; }
		
        if (isValidMove(index[0] - 1, index[1])) { // Up
			console.log('up', path);
			path.push(index);
			maze[index] = 'v'
// 			visited.add(index);
            dfs(maze, [index[0], index[1] + 1]);
        }
        if (isValidMove(index[0] + 1, index[1])) { // Down
			console.log('down', path);
			path.push(index);
			maze[index] = 'v'
// 			visited.add(index);			
            dfs(maze, [index[0] + 1, index[1]]);
        }
        if (isValidMove(index[0], index[1] - 1)) { // Left
			console.log('left', path);
			path.push(index);
			maze[index] = 'v'	
// 			visited.add(index);			
            dfs(maze, [index[0], index[1] - 1]);
        }
        if (isValidMove(index[0], index[1] + 1)) { // Right
			console.log('right', path);
			path.push(index);
			maze[index] = 'v'	
// 			visited.add(index);			
            dfs(maze, [index[0], index[1] + 1]);
        }
        path.pop();
// 		visited.delete(index);
    }
	
// 	  let mySmallMaze = [
//       ["v", "*", " "],
//       ["v", " ", " "],
//       [" ", "*", "e"],
		  
// path = [ [0,0]  ]

// 	[2,0]



    function isValidMove(row, column) {
        if (0 <= row && row < maze.length &&
			0 <= column && column < maze[0].length &&
            !visited(row, column) &&
            maze[row][column] !== '*'
        ) {
			console.log("true")
            return true;
        }
			console.log("false")
        return false;
    }
    
    function isEndOfMaze(row, column) {
        if (path.slice(-1) === 'e') { 
            return true;
        }
        return false;
    }

    function visited(row, column) {
        if (maze[row][column] === 'v') {
            return true;
        }
        return false;
    }
}

module.exports = mazeSolver;
