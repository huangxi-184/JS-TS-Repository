// 有一个自行车手打算进行一场公路骑行，这条路线总共由 n + 1 个不同海拔的点组成。自行车手从海拔为 0 的点 0 开始骑行。
// 给你一个长度为 n 的整数数组 gain ，其中 gain[i] 是点 i 和点 i + 1 的 净海拔高度差（0 <= i < n）。请你返回 最高点的海拔 。
// 输入：gain = [-5,1,5,0,-7]
// 输出：1
// 解释：海拔高度依次为 [0,-5,-4,1,1,-6] 。最高海拔为 1 。

function largestAltitude(gain: number[]): number {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i];
        max = Math.max(max, sum);
    }
    return max;
};

largestAltitude([-4, -3, -2, -1, 4, 3, 2])