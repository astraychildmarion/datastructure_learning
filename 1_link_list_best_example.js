var Node = function (val, next) {
  this.val = val;
  this.next = next;
};


var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size) {
    return -1;
  }
  let currentNode = this.head;
  // console.log(`new get for index: ${index}, this.size: ${this.size}`);
  for (let i = 0; i < index; i++) {
    // console.log(currentNode.val);
    // if (currentNode === null) {
    //   return -1;
    // }
    currentNode = currentNode.next;
  }
  // if (currentNode=== null){
  //     return -1;
  // }
  return currentNode.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newHead = new Node(val, this.head);
  this.head = newHead;
  if (this.size === 0) {
    this.tail = newHead;
  }
  (this.size)++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newTail = new Node(val, null);
  if (this.size === 0) {
    this.tail = this.head = newTail;
  } else {
    this.tail.next = newTail;
    this.tail = newTail;
  }
  (this.size)++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
  } else if (index === this.size) {
    this.addAtTail(val);
  } else {
    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }
    const newNode = new Node(val, current.next);
    current.next = newNode;
    (this.size)++;
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size) {
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
    if (this.size === 1) {
      this.tail = null;
    }
  } else if (index === this.size - 1) {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }
    let current = this.head;
    for (let i = 2; i < this.size; i++) {
      current = current.next;
    }
    this.tail = current;
    current.next = null;
  } else {
    let previous = new Node(0, this.head);
    for (let i = 0; i < index; i++) {
      previous = previous.next;
    }
    previous.next = previous.next === null ? null : previous.next.next;
  }
  (this.size)--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */