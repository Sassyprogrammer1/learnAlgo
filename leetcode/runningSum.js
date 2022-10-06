/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let sum = 0;
    return nums.map(value => {
        return sum += value;
    })
};

runningSum([1,3,4,5,6,2]);