// This problem is taken from the codeSignal

// Given two strings, find the number of common characters between them
// For e.g  
// s1 = "aabcc" and s2 = "adcaa", the output should be solution(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".

// Solution :-
// 1. We can count the characters in the first string using a map
// 2. We can count only the characters in the second string which are present
// in the first string only using the map
// 3. The map for the second string will always contain only the common characters
// 4. Convert the keys of the second map into an array
// 5. loop through this array and check in the both the Maps that which 
// alphabet has a lower count
// 6. Add the lower count to the sum
// 7. Return the sum
function solution(s1, s2) {
    let sum = 0;
    if(s1 === s2) {
        return s1.length;
    }
    let s1Map = new Map();
    let s2Map = new Map();
    
    for(var i=0;i<s1.length;i++) {
        s1Map.set(s1[i], s1Map.get(s1[i]) + 1 || 1);
    }
    
    for(var j=0;j<s2.length;j++) {
        if(s1Map.get(s2[j]) !== undefined) {
            s2Map.set(s2[j], s2Map.get(s2[j]) + 1 || 1);
        }
    }
    let arr = Array.from(s2Map.keys());
    for(var k=0;k<arr.length;k++) {
        let s1Count = s1Map.get(arr[k]);
        let s2Count = s2Map.get(arr[k]);
        if(s1Count < s2Count) {
            sum += s1Count;
        } else {
            sum += s2Count;
        }
    }
    return sum;
}