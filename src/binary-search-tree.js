const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (this.root) {
      return null;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/* data */) {
    // if (!this.root()) this.root = addWithin(this.root, data);

    // function addWithin(node, data) {
    //     if (!node) {
    //         return new Node(data);
    //     }
    //     if (node.data === data) {
    //         return node;
    //     }
    //     if (node.data > data) {
    //         node.left = addWithin(node.left, data);
    //     } else {
    //         node.right = addWithin(node.right, data);
    //     }
    //     return node;
    // }
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};