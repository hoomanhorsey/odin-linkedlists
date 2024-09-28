function createLinkedList(name) {
  return {
    name: name,
    append() {
      console.log("appendvalue");
    },
    prepend(value) {
      console.log("prependvalue");
    },
    size() {},
    head() {},
    tail() {},
    at(index) {},
    pop() {},
    contains(value) {},
    find(value) {},
    tostring() {},
  };
}

const linkedList = createLinkedList("name");

console.log(linkedList);
console.log(linkedList.append());

function createNode(name, value, nextNode = null) {
  return {
    name: name,
    value: value,
    nextNode: nextNode,
  };
}

const hairyNode = createNode("hairyNode", 5, null);
const nubileNode = createNode("nubileNode", 6, hairyNode);

console.log(hairyNode.value);
console.log(hairyNode.nextNode);

console.log(nubileNode.nextNode);
