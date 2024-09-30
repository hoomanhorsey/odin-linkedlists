function createLinkedList(name, headNode = null, tailNode = null) {
  return {
    name: name,
    headNode: headNode,
    tailNode: tailNode,

    append(value) {
      const node = createNode(value);
      console.log("Calling Appending - (inside append now)");

      // check List.headNode, and inserting 'node' as headNode if null.
      if (this.headNode === null) {
        this.headNode = node;
        console.log("no headNode. inserted new headnode");
        console.log(" ");
      }

      // check List.tailNode, and inserting 'node' as tailNode if null
      if (linkedList.tailNode === null) {
        this.tailNode = node;
        console.log("inserted initial tail node");
        console.log(" ");
      } else {
        console.log("tailNode is filled: ");
        console.log(linkedList.tailNode);

        const previousTailNode = linkedList.tailNode;
        console.log("previousTailNode");
        console.log(previousTailNode);
        var temp = node;
        previousTailNode.next = temp;

        linkedList.tailNode = node;
        console.log("current tail Node");
        console.log(linkedList.tailNode);
        console.log("end of tail node loggin");
        console.log(" ");

        // console.log("headnode");
        // console.log(linkedList.headNode);
        // console.log(linkedList.headNode.next);
        // linkedList.headNode.next = "poo";
        // console.log(linkedList.headNode.next);

        console.log(" ");

        // traverse entire list until you come across
        // (1)go to head node.
        // this is the current node.
        // store node in variable 'current node'.
        // (2) look up value of next node.
        // if null, then current node is tail.
        // tail = current
        //if not null,
        // previousnode = currentnode
        // currentnode = next
        // (2) look up value of next node.
      }

      // return node;
    },
    prepend(value) {
      console.log("prependvalue");
      const node = createNode(value);
      console.log("Calling Prepending - (inside pre-pend now)");

      let existingHeadNode = this.headNode;

      node.next = existingHeadNode;

      this.headNode = node;
    },
    size() {
      let i = 1;
      let current = linkedList.headNode;
      console.log(current.value);

      while (current.next !== null) {
        current = current.next;

        console.log(current.value);

        i++;
      }
      console.log("size = " + i);
      return i;
    },
    head() {
      return headNode;
    },
    tail() {
      return tailNode;
    },
    at(index) {
      let i = 0;
      let current = linkedList.headNode;

      while (i !== index) {
        // let previous = current;
        current = current.next;

        console.log(current);
        i++;
      }

      console.log(current);
      return current;
    },
    pop() {
      let current = linkedList.headNode;
      let previous = "";

      while (current !== linkedList.tailNode) {
        previous = current;
        current = current.next;
      }
      linkedList.tailNode = previous;
      previous.next = null;
      console.log("pop");
      console.log(previous);
      console.log(linkedList.tailNode);
      console.log(current.next);
    },
    contains(value) {
      let current = linkedList.headNode;

      console.log(current.value);

      while (current.next !== null) {
        if (current.value !== value) {
          current = current.next;
        } else {
          console.log("found one");
          console.log(current);
          console.log(value);
          return true;
        }
      }
      console.log("not in list");

      return false;
    },
    find(value) {
      let current = linkedList.headNode;
      let i = 0;
      console.log(current.value);

      while (current.next !== null) {
        if (current.value !== value) {
          current = current.next;
          i++;
        } else {
          console.log("found one");
          console.log(current);
          console.log(value);
          console.log("index: " + i);

          return i;
        }
      }
      console.log("not in list");

      return null;
    },
    tostring() {
      let current = linkedList.headNode;
      let string = "";

      while (current.next !== null) {
        string = string + `(${current.value}) -> `;
        current = current.next;
      }
      string = string + `(${current.value}) -> ` + "null";
      console.log(string);
    },
    insertAt(value, index) {
      let current = linkedList.headNode;
      let i = 0;
      const node = createNode(value);
      let previous;

      if (index === 0) {
        linkedList.headNode = node;
        node.next = current;
      } else {
        while (i !== index) {
          previous = current;
          console.log("current node");
          console.log(current);
          current = current.next;

          console.log(current);
          i++;
        }
        console.log("*************************");
        console.log(previous);

        console.log(current);

        console.log("*************************");
        console.log(linkedList.tailNode);
        linkedList.tailNode;
        if (previous === linkedList.tailNode) {
          previous.next = node;
          linkedList.tailNode = node;
          node.next = null;
        } else {
          console.log("previous " + previous);
          console.log(node);

          previous.next = node;
          node.next = current;
        }
      }
    },
    removeAt(index) {
      let current = linkedList.headNode;
      let i = 0;
      let previous;

      while (i !== index) {}
    },
  };
}

const linkedList = createLinkedList("name");

function createNode(value, next = null) {
  return {
    value: value,
    next: next,
  };
}

console.log("Creating Node******");

console.log("hairyNode");
console.log(linkedList.append("hairyNode"));
console.log("End of creation node call ");

console.log("svelteNode");
console.log(linkedList.append("svelteNode"));
console.log(" ");

console.log("nubileNode");
console.log(linkedList.append("nubileNode"));
console.log(" ");

console.log("slipperyeNode");
console.log(linkedList.append("slipperyNode"));
console.log(" ");

console.log("crispyNode");
console.log(linkedList.append("crispyNode"));
console.log(" ");

console.log("velvetNode");
console.log(linkedList.prepend("velvetNode"));
console.log(" ");

// const hairyNode = createNo de("hairyNode", 5, null);
// console.log(hairyNode);

// const nubileNode = createNode("nubileNode", 6, null);
console.log(" ");
console.log("FINAL LOGS******");
console.log(linkedList);
console.log("headNode ");
console.log(linkedList.headNode);
console.log("tailNode ");
console.log(linkedList.tailNode);

// console.log(hairyNode);
// console.log(svelteNode);
// console.log(nubileNode);

console.log("indexed at 2");

console.log(linkedList.at(2));

console.log("size calc");

console.log(linkedList.size());

// deleting crispy node
console.log(linkedList.pop());

console.log("size calc again after pop");
console.log(linkedList.size());

console.log(linkedList.contains("nubileNode"));
console.log(linkedList.contains("mickey Mouse"));

console.log(linkedList.find("nubileNode"));
console.log(linkedList.find("mickey Mouse"));

linkedList.tostring();

console.log(linkedList.insertAt("spikyNode", 3));
linkedList.tostring();

console.log(linkedList.insertAt("stickyNode", 0));
linkedList.tostring();

console.log(linkedList.insertAt("smillyNode", 7));
linkedList.tostring();
console.log(linkedList.size());

console.log("headNode ");
console.log(linkedList.headNode);
console.log("tailNode ");
console.log(linkedList.tailNode);
