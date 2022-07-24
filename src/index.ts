import { BinaryTree, TreeNode } from './classes/binaryTree';
import { countries } from './countries';
import { findTripletSum } from './classes/triplet';

const binaryTree = new BinaryTree([4, 2, 5, 1, 3, 6]);
const binaryTreeB = new BinaryTree([4, 2, 5, 1, 3, 6]);
console.log('min', binaryTree.findMin());
console.log('max', binaryTree.findMax());
console.log('depth', binaryTree.depth());
console.log('inOrder', binaryTree.inOrder());
console.log('preOrder', binaryTree.preOrder());
console.log('postOrder', binaryTree.postOrder());
console.log('find', binaryTree.find(6));
console.log('find', binaryTree.find(15));

console.log('equal', binaryTree.equal(binaryTreeB));

const numArr = [1, 10, 13, 4, 32, 7, 3, 9];
const sum = 14;
console.log(numArr, sum, findTripletSum(numArr, sum));
