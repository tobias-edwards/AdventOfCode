class TreeNode {
  constructor(id) {
    this.id = id;
    this.children = new Set();
    this.parents = new Set();
  }

  addChild(nodeId, quantity) {
    this.children.add([nodeId, quantity]);
  }

  addParent(nodeId) {
    this.parents.add(nodeId);
  }
}

export default TreeNode;
