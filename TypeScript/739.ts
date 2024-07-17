/**
 * 抽象题意为 : 求解给定序列中每个位置（右边）最近一个比其大的位置，可使用「单调栈」来进行求解。
具体的，我们可以从前往后处理所有的 ts[i]，使用某类容器装载我们所有的「待更新」的位置（下标），假设当前处理到的是 ts[i]：
若其比容器内的任意位置（下标）对应温度要低，其必然不能更新任何位置（下标），将其也加入容器尾部（此时我们发现，若有一个新的位置（下标）加入容器，其必然是当前所有待更新位置（下标）中的温度最低的，即容器内的温度单调递减）；
若其价格高于容器内的任一位置（下标）对应温度，其能够更新容器位置（下标）的答案，并且由于我们容器满足单调递减特性，我们必然能够从尾部开始取出待更新位置来进行更新答案，直到处理完成或遇到第一个无法更新位置。
由于我们需要往尾部添加和取出元素，因此容器可使用「栈」。
 * @param temperatures 
 * @returns 
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const ans = new Array<number>(n).fill(0)
  const stk = new Array<number>(n).fill(-1)
  let he = 0,
    ta = 0
  for (let i = 0; i < n; i++) {
    while (he < ta && temperatures[stk[ta - 1]] < temperatures[i]) {
      const idx = stk[--ta]
      ans[idx] = i - idx
    }
    stk[ta++] = i
  }
  return ans
}

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
