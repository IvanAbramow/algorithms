class TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function arrayToTree(arr: string[]): TreeNode | null {
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
      current.left = new TreeNode(arr[i] as string);
      queue.push(current.left);
    }
    i++;

    // Правый потомок
    if (arr[i] !== null && i < arr.length) {
      current.right = new TreeNode(arr[i] as string);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

const arr = ['A', 'B', 'C', 'D', 'E', null, 'F'];
const tree = arrayToTree(arr);

function preOrder(node: TreeNode) {
  if (node === null) {
    return [];
  }

  const result = [node.value];

  result.push(...preOrder(node.left));
  result.push(...preOrder(node.right));

  return result;
}

function inOrder(node: TreeNode) {
  if (node === null) {
    return [];
  }

  let result: string[] = [];

  result.push(...inOrder(node.left));
  result.push(node.value)
  result.push(...inOrder(node.right));

  return result;
}

function postOrder(node: TreeNode) {
  if (node === null) {
    return [];
  }

  let result: string[] = [];

  result.push(...postOrder(node.left));
  result.push(...postOrder(node.right));
  result.push(node.value);

  return result;
}

console.log(preOrder(tree))
console.log(inOrder(tree))
console.log(postOrder(tree))
