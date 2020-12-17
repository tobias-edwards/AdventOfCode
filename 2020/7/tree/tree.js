import TreeNode from "./node.js";
import { sum } from "./../../helpers/maths.js";
import { removeDuplicates } from "./../../helpers/array.js";

class Tree {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node.id] = node;
  }

  addBagRule(bagRule) {
    const [, parentBagName, childrenBags] = bagRule.match(
      /(.*) bags contain (.*).$/
    );

    if (!(parentBagName in this.nodes)) {
      this.addNode(new TreeNode(parentBagName));
    }

    if (childrenBags === "no other bags") {
      return;
    }

    // Add child nodes and their parents
    for (const childBagDesc of childrenBags.split(", ")) {
      const [, quantity, childBagName] = childBagDesc.match(/(\d+) (.*) bags?/);

      if (!(childBagName in this.nodes)) {
        this.addNode(new TreeNode(childBagName));
      }

      this.nodes[childBagName].addParent(parentBagName);
      this.nodes[parentBagName].addChild(childBagName, +quantity);
    }
  }

  _findParentNodes(nodeId) {
    return [...this.nodes[nodeId].parents]
      .map((parentId) => [parentId].concat(this._findParentNodes(parentId)))
      .flat();
  }

  findParentNodes(nodeId) {
    return removeDuplicates(this._findParentNodes(nodeId));
  }

  _countChildNodes(nodeId, quantity) {
    return (
      quantity +
      [...this.nodes[nodeId].children].reduce(
        (total, [childId, childQuantity]) => {
          return (
            total + quantity * this._countChildNodes(childId, childQuantity)
          );
        },
        0
      )
    );
  }

  countChildNodes(nodeId, quantity = 1) {
    return this._countChildNodes(nodeId, quantity) - 1;
  }
}

export default Tree;
