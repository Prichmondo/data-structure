export type Node<T> = TreeNode<T> | T;

export class TreeNode<T> {
  constructor(
    public value: T,
    public left: TreeNode<T> | null = null,
    public right: TreeNode<T> | null = null
  ) {}
}

export class BinaryTree<T> {
  public root: TreeNode<T> | null = null;

  constructor (
    root: Node<T> | T[] | null = null
  ) {
    if (root) {
      if (Array.isArray(root)) {
        function arrSplit(arr: T[]): T[][] {
          const half = Math.ceil(arr.length / 2);    
          const firstHalf = arr.slice(0, half);
          const secondHalf = arr.slice(half);
          return [firstHalf, secondHalf];
        }
        function rec(arr: T[]): TreeNode<T> | null {
          if(arr.length > 0) {
            const [firstHalf, secondHalf] = arrSplit(arr);
            const value = firstHalf.pop();
            if(value) {
              return new TreeNode<T>(
                value, 
                rec(firstHalf), rec(secondHalf)
              )
            }
          }
          return null;
        }
        this.root = rec(root);
      } else {
        this.root = root instanceof TreeNode
          ? root
          : new TreeNode(root);
      }
    }
  }

  public equal(tree: BinaryTree<T>): boolean {
    const sameNode = (nodeA: TreeNode<T> | null, nodeB: TreeNode<T> | null): boolean => {
      if (nodeA === null && nodeB === null) {
        return true;
      }
      if (nodeA && nodeB) {
        return nodeA.value === nodeB.value && sameNode(nodeA.left, nodeB.left) && sameNode(nodeA.right, nodeB.right);
      }
      return false;
    }
    return sameNode(tree.root, this.root);
  }

  public insert(node: Node<T>) {
    const newNode = node instanceof TreeNode
      ? node
      : new TreeNode<T>(node);
    if (this.root) {
      this.insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (node.value > newNode.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }      
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      } 
    }
  }

  public depth(root: TreeNode<T> | null = this.root): number {
    function calc(node: TreeNode<T> | null): number {
      if (!node) {
        return 0;  
      }
      const left = 1 + calc(node.left);
      const right = 1 + calc(node.right);
      return Math.max(left, right);
    }    
    return calc(root);
  }

  public findMin(root: TreeNode<T> | null = this.root ): TreeNode<T> | null {
    if (!root) {
      return null;
    }
    if (!root.left) {
      return root;
    }
    let minNode: TreeNode<T> | null = root.left;
    while (minNode!.left !== null) {
      minNode = minNode!.left;
    }
    return minNode;
  }

  public findMax(root: TreeNode<T> | null = this.root ): TreeNode<T> | null {
    if (!root) {
      return null;
    }
    if (!root.right) {
      return root;
    }
    let maxNode: TreeNode<T> | null = root.right;
    while (maxNode!.right !== null) {
      maxNode = maxNode!.right;
    }
    return maxNode;
  }

  public remove(value: T): void {
    const removeNode = (node: TreeNode<T> | null, value: T): TreeNode<T> | null => {
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
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
      } else {
        node.right = removeNode(node.right, value);
      }      
      return node;    
    }
    this.root = removeNode(this.root, value);
  }

  public find(value: T): TreeNode<T> | null {
    if (this.root) {
      let current: TreeNode<T> | null = this.root;
      while(current.value !== value) {
        if (value < current.value) {
          current = current.left;
        } else {
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

  public inOrder(): T[] {
    const result: T[] = [];
    if (this.root) {
      const traverseInOrder = (node: TreeNode<T> | null) => {
        if (node) {
          traverseInOrder(node.left);
          result.push(node.value);
          traverseInOrder(node.right);
        }
      }
      traverseInOrder(this.root);
    }
    return result;
  }

  public preOrder(): T[] {
    const result: T[] = [];
    if (this.root) {
      const traversePreOrder = (node: TreeNode<T> | null) => {
        if (node) {
          result.push(node.value);
          traversePreOrder(node.left);
          traversePreOrder(node.right);
        }
      }
      traversePreOrder(this.root);
    }
    return result;
  }

  public postOrder(): T[] {
    const result: T[] = [];
    if (this.root) {
      const traversePostOrder = (node: TreeNode<T> | null) => {
        if (node) {
          traversePostOrder(node.left);
          traversePostOrder(node.right);
          result.push(node.value);
        }
      }
      traversePostOrder(this.root);
    }
    return result;
  }
}
