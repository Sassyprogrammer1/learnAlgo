// This problem is taken from the codeSignal 

// Ticket numbers usually consist of an even number of digits. 
// A ticket number is considered lucky if the sum of the first half of the digits 
// is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.
// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

// solution :-
function solution(n) {
    let str = n.toString();
    let half = str.length / 2;
    let sum1 = 0;
    let sum2 = 0;
    for(var i=0; i < half; i++) {
        sum1 += parseInt(str[i]);
        sum2 += parseInt(str[str.length-i-1]);   
    }
    return sum1 == sum2;
}
