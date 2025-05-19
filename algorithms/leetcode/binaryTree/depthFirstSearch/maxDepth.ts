class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// function arrayToTree(arr: number[]): TreeNode | null {
//   if (!arr.length || arr[0] === null) {
//     return null;
//   }
//
//   const root = new TreeNode(arr[0]);
//   const queue: (TreeNode)[] = [root];
//
//   let i = 1;
//
//   while (queue.length && i < arr.length) {
//     const current = queue.shift();
//
//     if (!current) {
//       continue;
//     }
//
//     if (arr[i] !== null && i < arr.length) {
//       current.left = new TreeNode(arr[i] as number);
//       queue.push(current.left);
//     }
//     i++;
//
//     if (arr[i] !== null && i < arr.length) {
//       current.right = new TreeNode(arr[i] as number);
//       queue.push(current.right);
//     }
//     i++;
//   }
//
//   return root;
// }

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
}

const arr = [3,9,20,null,null,15,7];
const tree = arrayToTree(arr);

console.log(tree)

console.log(maxDepth(tree));
