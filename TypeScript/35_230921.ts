// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

function searchInsert(nums: number[], target: number): number {
    let flag: number = nums.findIndex((item) => item >= target)
    if (flag === -1) {
        return nums.length
    }
    return flag
}

console.log(searchInsert([1, 3, 5, 6], 2))