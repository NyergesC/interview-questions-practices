/* We are given a two-dimensional board of size N * M (N rows and M columns).
 Each field of the board can be empty ('.'), may contain an obstacle ('X') or may have a character in it. 
 The character might be either an assassin ('A') or a guard. Each guard stands still and looks straight ahead,
  in the direction they are facing.Every guard looks in one of four directions (up, down, left of right on the board) and the represented by one of four symbols. 
  A guard denoted by '<' is looking to the left, by '>', to the right, '/', up; or 'v', down. 
  the guards can see everything in a straight line in the direction in which they are facing, as far as the first obstacle 
  ('X' or any other guard) or the edge of the board. 
  The assassin can move fromt the current field to any other empty field with a shared edge. 
  The assassing cannot move onto fields containing obstacles or enemies. Write a function solution(B) that given an array B consinsting of N strings
   denoting rows of the array, returns true if is it posssible for the assassin to sneak from their 
   current location to the bottom-right cell of the board undetected, and false otherwiseJAVASCRIPT taskthere is
    example:
    1.) Given B = ["X.....>", "..v..X.", ".>..X..", "A....."] your function return false. All avaliable paths lead through a field observed by a guard.
    2.) Given B = ["...", ">.A"] your function return false as the assassian gets spotted right at the start
    3.) Given B = ["A.v", ..."] your function should return false4.) Given B =["...Xv", "AX../", ".XX.." your function return true. 
    the guard in the second row is blocking the other one from watchin the bottomright square. */

    function solution(B) {
        const N = B.length; // number of rows
        const M = B[0].length; // number of columns
      
        const isInsideBoard = (i, j) => i >= 0 && i < N && j >= 0 && j < M; // check if the position is inside the board
      
        const isGuardInSight = (i, j, direction) => { // check if the guard is in sight
          const directions = {
            '<': { x: 0, y: -1 },
            '>': { x: 0, y: 1 },
            'v': { x: 1, y: 0 },
          };
      
          let x = i + directions[direction].x; // get the next position
          let y = j + directions[direction].y; // get the next position
      
          while (isInsideBoard(x, y)) { // check if the next position is inside the board
            if (B[x][y] === 'X' || B[x][y] === '>' || B[x][y] === '<' ||  B[x][y] === 'v') { // check if the next position is an obstacle or another guard
              return true;
            }
      
            x += directions[direction].x;
            y += directions[direction].y;
          }
      
          return false;
        };
      
        const dfs = (i, j) => { // depth-first search
          if (!isInsideBoard(i, j) || B[i][j] === 'X' || B[i][j] === '>' || B[i][j] === '<'  || B[i][j] === 'v') { // check if the position is inside the board and if it's an obstacle or another guard
            return false;
          }
      
          if (i === N - 1 && j === M - 1) { // check if the position is the bottom-right cell of the board
            return true
          }
      
          B[i] = B[i].substring(0, j) + 'X' + B[i].substring(j + 1); // mark the current position as visited
      
        }
      
        return dfs(0, 0); // start the depth-first search from the top-left cell of the board
      }