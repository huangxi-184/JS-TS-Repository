function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0
    }

    let p = 0, q = 1

    while (q < nums.length) {
        if (nums[p] == nums[q]) {
            q++
        }
        else {
            nums[p + 1] = nums[q]
            p++
            q++
        }
    }
    return p + 1
};

let myNums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log(removeDuplicates(myNums))