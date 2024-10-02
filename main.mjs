import { createLinkedList } from "./linkedlists.mjs";

console.log("Creating Linked List from Main ******");
const linkedList = createLinkedList();

linkedList.append("hairyNode");
linkedList.append("svelteNode");
linkedList.append("nubileNode");
linkedList.append("slipperyNode");
linkedList.append("crispyNode");
console.log(linkedList.tostring());

linkedList.prepend("velvetNode");

console.log("End of creation node call ");

console.log(linkedList);

console.log(linkedList.tostring());

console.log("indexed at 2");
console.log(linkedList.at(2));

console.log("size calc");
console.log(linkedList.size());

// deleting last node
linkedList.pop();
console.log("size calc again after pop");
console.log(linkedList.size());

console.log(linkedList.contains("nubileNode")); // true
console.log(linkedList.contains("mickey Mouse")); // false

console.log(linkedList.find("nubileNode")); // 3
console.log(linkedList.find("mickey Mouse")); // null

linkedList.insertAt("spikyNode", 3);
console.log(linkedList.tostring());

linkedList.insertAt("stickyNode", 0);
console.log(linkedList.tostring());

linkedList.insertAt("smillyNode", 6);
console.log(linkedList.tostring());
console.log(linkedList.size());

linkedList.removeAt(6);
console.log(linkedList.tostring());
