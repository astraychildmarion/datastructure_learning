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
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail)
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode
}
const list = new LinkedList()
list.addToTail(34)
list.addToHead(871)
list.addToHead(2)
list.addToHead(1)
list.addToHead(871)
// console.log(list.head.value);
// console.log(list.tail.value);
// console.log(list.head.next.value);

/**
 * is this link list exist?
 * store the head/tail's value
 * change pointer to next/prev node
 * if after we remove this node, the link list still exist, set prev/next to null
 * if the link list is not exist, set head/tail to null
 */
LinkedList.prototype.removeHead = function (){
  if (!this.head) return null;
  const value = this.head.value;
  this.head = this.head.next
  if (this.head) this.head.prev = null
  else this.tail = null
  return value
}
LinkedList.prototype.removeTail = function (){
  if (!this.tail) return null;
  const value = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null
  return value
}
// list.removeHead()
// list.removeTail()
// console.log(list.head.value);
// console.log(list.tail.value);

/**
 * set starter currentValue: head or tail;
 * need a loop: loop stop condition is no current node
 */

LinkedList.prototype.search = function(searchValue) {
  let currentValue = this.head;
  while (currentValue) {
    if (currentValue.value === searchValue) return currentValue.value
    currentValue = currentValue.next;
  }
  return null
}
// console.log(list.search(333))

LinkedList.prototype.indexOf = function(val) {
  let current = this.head
  let index = 0
  let indexArray = []
  while(current){
    if (current.value === val) indexArray.push(index)
    current = current.next
    index++
  }
  return (indexArray.length > 0) ? indexArray : null
}
console.log(list.indexOf(871));