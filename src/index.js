"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTree_1 = require("./classes/binaryTree");
const triplet_1 = require("./classes/triplet");
const binaryTree = new binaryTree_1.BinaryTree([4, 2, 5, 1, 3, 6]);
const binaryTreeB = new binaryTree_1.BinaryTree([4, 2, 5, 1, 3, 6]);
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
console.log(numArr, sum, (0, triplet_1.findTripletSum)(numArr, sum));