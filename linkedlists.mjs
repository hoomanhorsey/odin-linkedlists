function createLinkedList(headNode = null, tailNode = null) {
  return {
    headNode: headNode,
    tailNode: tailNode,

    append(value) {
      const node = createNode(value);
      // check List.headNode, and inserting 'node' as headNode if null.
      if (this.headNode === null) {
        this.headNode = node;
      }
      // check List.tailNode, and inserting 'node' as tailNode if null
      if (this.tailNode === null) {
        this.tailNode = node;
      } else {
        const previousTailNode = this.tailNode;
        let newTailNode = node;
        previousTailNode.next = newTailNode;
        this.tailNode = node;
      }
    },
    prepend(value) {
      const node = createNode(value);
      let existingHeadNode = this.headNode;
      node.next = existingHeadNode;
      this.headNode = node;
    },
    size() {
      let i = 1;
      let current = this.headNode;
      while (current.next !== null) {
        current = current.next;
        i++;
      }
      return i;
    },
    head() {
      return this.headNode;
    },
    tail() {
      return this.tailNode;
    },
    at(index) {
      let i = 0;
      let current = this.headNode;
      while (i !== index) {
        current = current.next;
        i++;
      }
      return current;
    },
    pop() {
      let current = this.headNode;
      let previous = "";

      while (current !== this.tailNode) {
        previous = current;
        current = current.next;
      }
      this.tailNode = previous;
      previous.next = null;
    },
    contains(value) {
      let current = this.headNode;
      while (current.next !== null) {
        if (current.value !== value) {
          current = current.next;
        } else {
          return true;
        }
      }
      return false;
    },
    find(value) {
      let current = this.headNode;
      let i = 0;

      while (current.next !== null) {
        if (current.value !== value) {
          current = current.next;
          i++;
        } else {
          return i;
        }
      }
      return null;
    },
    tostring() {
      console.log("tostring called");
      let current = this.headNode;
      let string = "";
      while (current.next !== null) {
        string = string + `(${current.value}) -> `;
        current = current.next;
      }
      return (string = string + `(${current.value}) -> ` + "null");
    },
    insertAt(value, index) {
      let current = this.headNode;
      let i = 0;
      const node = createNode(value);
      let previous;

      if (index === 0) {
        this.headNode = node;
        node.next = current;
      } else {
        while (i !== index) {
          previous = current;
          current = current.next;
          i++;
        }
        this.tailNode;
        if (previous === this.tailNode) {
          previous.next = node;
          this.tailNode = node;
          node.next = null;
        } else {
          previous.next = node;
          node.next = current;
        }
      }
    },
    removeAt(index) {
      let current = this.headNode;
      let i = 0;
      let previous;

      if (index === 0) {
        this.headNode = current.next;
      } else {
        while (i !== index) {
          previous = current;
          current = current.next;
          i++;
        }
        if (current === this.tailNode) {
          this.tailNode = previous;
          previous.next = null;
        } else {
          previous.next = current.next;
        }
      }
    },
  };
}

function createNode(value, next = null) {
  return {
    value: value,
    next: next,
  };
}

export { createLinkedList };
