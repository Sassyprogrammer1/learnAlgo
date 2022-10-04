// This problem is taken from the codeSignal

// After becoming famous, the CodeBots decided to move into a new building together. 
// Each of the rooms has a different cost, and some of them are free, 
// But there's a rumour that all the free rooms are haunted! 
// Since the CodeBots are quite superstitious, 
// They refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, 
// Your task is to return the total sum of all rooms 
// That are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
// For example :-
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be solution(matrix) = 9.

// matrix = [[1, 1, 1, 0], 
//           [0, 5, 0, 1], 
//           [2, 1, 3, 10]]
// the output should be solution(matrix) = 9.

// The solution is very simple. 
// 1. The first step is to traverse the Matrix columns
// 2. As we know that we have to ignore any digit below a zero so 
// we can easily place a counter and add it whenever we come across a zero
// while traversing the columns from top to bottom of the matrix.
// 3. If the count is zero it means no zero has been encountered so add it to the sum
// 4. Return the sum in the end.
function solution(matrix) {
    let sum = 0;
    for(var i=0;i<matrix[0].length;i++) {
        let count = 0;
        for(var j=0;j<matrix.length;j++) {
            if(matrix[j][i] === 0) {
                count++;
            }
            if(count === 0) {
                sum += matrix[j][i];
            } else {
                sum += 0;
            }
        }
    }
    return sum;
    
}