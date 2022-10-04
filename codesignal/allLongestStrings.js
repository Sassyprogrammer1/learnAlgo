// This problem is taken from CodeSignal

// Given an array of strings, return another array containing all of its longest strings
// Example :-
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

// The solution is simple for this one. 
// 1. We will first find the length of the longest string
// 2. We will check for the max length if any string's length is equal
// with the max length then we will add that to the new array
// 3. return the new Array
function solution(inputArray) {
    let max = inputArray[0].length;
    let newArr = [];
    for(var i=0;i<inputArray.length;i++) {
        if(inputArray[i].length > max) {
            max = inputArray[i].length;
        }
    }
    for(var j=0;j<inputArray.length;j++) {
        if(inputArray[j].length === max) {
            newArr.push(inputArray[j])
        }
    }
    return newArr;
}