"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.TreeNode = void 0;
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
exports.TreeNode = TreeNode;
class BinaryTree {
    constructor(root = null) {
        this.root = null;
        if (root) {
            if (Array.isArray(root)) {
                function arrSplit(arr) {
                    const half = Math.ceil(arr.length / 2);
                    const firstHalf = arr.slice(0, half);
                    const secondHalf = arr.slice(half);
                    return [firstHalf, secondHalf];
                }
                function rec(arr) {
                    if (arr.length > 0) {
                        const [firstHalf, secondHalf] = arrSplit(arr);
                        const value = firstHalf.pop();
                        if (value) {
                            return new TreeNode(value, rec(firstHalf), rec(secondHalf));
                        }
                    }
                    return null;
                }
                this.root = rec(root);
            }
            else {
                this.root = root instanceof TreeNode
                    ? root
                    : new TreeNode(root);
            }
        }
    }
    equal(tree) {
        const sameNode = (nodeA, nodeB) => {
            if (nodeA === null && nodeB === null) {
                return true;
            }
            if (nodeA && nodeB) {
                return nodeA.value === nodeB.value && sameNode(nodeA.left, nodeB.left) && sameNode(nodeA.right, nodeB.right);
            }
            return false;
        };
        return sameNode(tree.root, this.root);
    }
    insert(node) {
        const newNode = node instanceof TreeNode
            ? node
            : new TreeNode(node);
        if (this.root) {
            this.insertNode(this.root, newNode);
        }
        else {
            this.root = newNode;
        }
    }
    insertNode(node, newNode) {
        if (node.value > newNode.value) {
            if (!node.left) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (!node.right) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    depth(root = this.root) {
        function calc(node) {
            if (!node) {
                return 0;
            }
            const left = 1 + calc(node.left);
            const right = 1 + calc(node.right);
            return Math.max(left, right);
        }
        return calc(root);
    }
    findMin(root = this.root) {
        if (!root) {
            return null;
        }
        if (!root.left) {
            return root;
        }
        let minNode = root.left;
        while (minNode.left !== null) {
            minNode = minNode.left;
        }
        return minNode;
    }
    findMax(root = this.root) {
        if (!root) {
            return null;
        }
        if (!root.right) {
            return root;
        }
        let maxNode = root.right;
        while (maxNode.right !== null) {
            maxNode = maxNode.right;
        }
        return maxNode;
    }
    remove(value) {
        const removeNode = (node, value) => {
            if (!node) {
                return null;
            }
            if (node.value === value) {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }
                let minNode = this.findMin(node.right);
                if (minNode) {
                    node.value = minNode.value;
                    node.right = removeNode(node.right, minNode.value);
                }
            }
            else if (value < node.value) {
                node.left = removeNode(node.left, value);
            }
            else {
                node.right = removeNode(node.right, value);
            }
            return node;
        };
        this.root = removeNode(this.root, value);
    }
    find(value) {
        if (this.root) {
            let current = this.root;
            while (current.value !== value) {
                if (value < current.value) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
                if (!current) {
                    return null;
                }
            }
            return current;
        }
        return null;
    }
    inOrder() {
        const result = [];
        if (this.root) {
            const traverseInOrder = (node) => {
                if (node) {
                    traverseInOrder(node.left);
                    result.push(node.value);
                    traverseInOrder(node.right);
                }
            };
            traverseInOrder(this.root);
        }
        return result;
    }
    preOrder() {
        const result = [];
        if (this.root) {
            const traversePreOrder = (node) => {
                if (node) {
                    result.push(node.value);
                    traversePreOrder(node.left);
                    traversePreOrder(node.right);
                }
            };
            traversePreOrder(this.root);
        }
        return result;
    }
    postOrder() {
        const result = [];
        if (this.root) {
            const traversePostOrder = (node) => {
                if (node) {
                    traversePostOrder(node.left);
                    traversePostOrder(node.right);
                    result.push(node.value);
                }
            };
            traversePostOrder(this.root);
        }
        return result;
    }
}
exports.BinaryTree = BinaryTree;
