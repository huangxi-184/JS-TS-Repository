/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * root = [8,3,10,1,6,null,14,null,null,4,7,13]
 * 输出:7
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
    return dfs(root, root.val, root.val);
};

// 深度优先遍历
function dfs(root, mi, ma) {

    // 结束条件,如果没有根节点.

    if (root === null) {
        return 0;
    }
    // 递归

    var diff = Math.max(Math.abs(root.val - mi), Math.abs(root.val - ma));
    mi = Math.min(mi, root.val);
    ma = Math.max(ma, root.val);

    diff = Math.max(diff, dfs(root.left, mi, ma))
    diff = Math.max(diff, dfs(root.right, mi, ma))
    return diff;
}