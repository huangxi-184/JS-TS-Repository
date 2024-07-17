/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let maxNumber = 0
    while (left < right) {
        let currNumber = Math.min(height[left], height[right]) * (right - left)
        maxNumber = Math.max(maxNumber, currNumber)
        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }
    console.log(maxNumber)
    return maxNumber
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
// max 49