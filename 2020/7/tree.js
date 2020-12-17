class Tree {
  constructor() {
    this.nodes = {};
  }

  addNode(treeNode) {
    this.nodes[treeNode.id] = treeNode;
  }

  _findParentNodes(childId) {
    if (!(childId in this.nodes)) {
      return [];
    }

    return this.nodes[childId].parents
      .map((parentId) => [parentId].concat(this._findParentNodes(parentId)))
      .flat();
  }

  findParentNodes(childId) {
    return removeDuplicates(this._findParentNodes(childId));
  }
}

class TreeNode {
  constructor(id) {
    this.id = id;
    this.children = [];
    this.parents = [];
  }

  addChildren(...childNodes) {
    this.children.push(childNodes);
  }

  addParent(parentNode) {
    this.parents.push(parentNode);
  }
}

export default Tree;
