class Solution {
  public numsIndexList: any = {}

  constructor(nums: number[]) {
    const numSet = new Set(nums)
    const numNewLisert = Array.from(numSet)
    for (let i = 0; i < numNewLisert.length; i++) {
      this.numsIndexList[numNewLisert[i]] = []
    }
    for (let i = 0; i < nums.length; i++) {
      if (this.numsIndexList[nums[i]].length > 0) {
      }
      this.numsIndexList[nums[i]].push(i)
    }
  }
  pick(target: number): number {
    const indexList = this.numsIndexList[nums[target] as any]
    const randomIndex = Math.floor(Math.random() * indexList.length)
    return indexList[randomIndex]
  }
}

// let target = ["Solution", "pick", "pick", "pick"]
let nums = [[1, 2, 3, 3, 3], [3], [1], [3]]

// 输出 [null, 4, 0, 2]
const solution = new Solution(nums[0])
let result: Array<number | null> = []

for (let i = 1; i < nums.length; i++) {
  const pickIndex = solution.pick(nums[i][0])
  result.push(pickIndex)
}

console.log(result)
