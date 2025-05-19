class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function arrayToTree(arr: number[]): TreeNode | null {
  if (!arr.length || arr[0] === null) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue: (TreeNode)[] = [root];

  let i = 1;

  while (queue.length && i < arr.length) {
    const current = queue.shift();

    if (!current) {
      continue;
    }

    if (arr[i] !== null && i < arr.length) {
      current.left = new TreeNode(arr[i] as number);
      queue.push(current.left);
    }
    i++;

    if (arr[i] !== null && i < arr.length) {
      current.right = new TreeNode(arr[i] as number);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

const arr = [1, 2, 3, 4, 5, null, 6];
const tree = arrayToTree(arr);

function sumAllNodes(node: TreeNode): number {
  if (node === null) {
    return 0;
  }

  return node.value + sumAllNodes(node.left) + sumAllNodes(node.right);
}

function nodesNumber(node: TreeNode): number {
  if (node === null) {
    return 0;
  }

  return 1 + nodesNumber(node.left) + nodesNumber(node.right);
}

function hasValueInTree(node: TreeNode, value: number): boolean {
  if (node === null) {
    return false;
  }

  if (node.value === value) {
    return true;
  }

  return hasValueInTree(node.left, value) || hasValueInTree(node.right, value);
}

function findPathToValue(node: TreeNode, value: number): number[] {
  if (node === null) {
    return [];
  }

  if (node.value === value) {
    return [node.value];
  }

  const left = findPathToValue(node.left, value);
  if (left.length > 0) {
    return [node.value, ...left];
  }

  const right = findPathToValue(node.right, value);
  if (right.length > 0) {
    return [node.value, ...right];
  }

  return [];
}

function maxDepth(node: TreeNode): number {
  if (node === null) {
    return 0;
  }

  let depthLeft = 0;
  depthLeft += maxDepth(node.left);

  let depthRight = 0;
  depthRight += maxDepth(node.right);

  return 1 + Math.max(depthLeft, depthRight);
}

console.log(sumAllNodes(tree));
console.log(nodesNumber(tree));
console.log(hasValueInTree(tree, 3));
console.log(findPathToValue(tree, 5));
console.log(maxDepth(tree));
