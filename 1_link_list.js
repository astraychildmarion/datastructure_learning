/** Link list
 * Remove/add haed/tail ==> constant time O(1)
 * Searching through linked list ==> linear time O(n)
 * Memory management benefit: data doesn't have to be stored together. Pointers help. 
 */


function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

/** 
 * create a new node
 * check is it the list is empty 
 * make new node the head/tail */
LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail)
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode
}

/**
 * is this link list exist?
 * store the head/tail's value
 * change pointer to next/prev node
 * if after we remove this node, the link list still exist, set prev/next to null
 * if the link list is not exist, set head/tail to null
 */
LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  const value = this.head.value;
  this.head = this.head.next
  if (this.head) this.head.prev = null
  else this.tail = null
  return value
}
LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  const value = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null
  return value
}

/**
 * set starter currentValue: head or tail;
 * need a loop: loop stop condition is no current node
 */

LinkedList.prototype.search = function (searchValue) {
  let currentValue = this.head;
  while (currentValue) {
    if (currentValue.value === searchValue) return currentValue.value
    currentValue = currentValue.next;
  }
  return null
}

LinkedList.prototype.indexOf = function (val) {
  let current = this.head
  let index = 0
  let indexArray = []
  while (current) {
    if (current.value === val) indexArray.push(index)
    current = current.next
    index++
  }
  return (indexArray.length > 0) ? indexArray : null
}

LinkedList.prototype.addAtIndex = function (index, value) {
  let current = this.head;
  let currentIndex = 0;
  // if length === 0
  if (!current && index === 0) {
    this.addToHead(value)
  } else if (!current && index !== 0) {
    // if add in empty index
    return
  } else {
    while (currentIndex < index && current) {
      current = current.next
      currentIndex += 1
    }
    if (index === 0) {
      this.addToHead(value)
    } else if (!current) {
      this.addToTail(value)
    } else {
      let newNode = new Node(value, current, current.prev);
      const old = current
      const oldPrev = current.prev
      old.prev = newNode
      oldPrev.next = newNode
    }
  }
}

LinkedList.prototype.get = function (index) {
  let current = this.head;
  let currentIndex = 0;
  // if list is null
  if (!current) return -1
  // if list only 1 node
  if (index === 0) {
    return current.value
  } else {
    while (currentIndex < index && current) {
      current = current.next
      currentIndex += 1
    }
    return current ? current.value : -1
  }
}

LinkedList.prototype.deleteAtIndex = function (index) {
  let current = this.head;
  let currentIndex = 0;
  // if length === 0
  if (!current) return
  // if only one node
  if (index === 0 && !current.next) {
    this.head = null;
    this.tail = null;
    return
  }
  // if delete head
  if (index === 0) {
    this.head = this.head.next
    this.head.prev = null
    return
  }
  // if delete tail
  while (currentIndex < index && current) {
    current = current.next
    currentIndex += 1
  }
  if (!current) return
  if (!current.next) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    return
  }
  const newN = current.next;
  const newPrev = current.prev
  newN.prev = newPrev
  newPrev.next = newN
}

const list = new LinkedList()
console.log(list.addToHead(7))
console.log(list.addToHead(2))
console.log(list.deleteAtIndex(0))
console.log(list.deleteAtIndex(0))
console.log(list.deleteAtIndex(0))
console.log(list.get(10))
console.log(list)