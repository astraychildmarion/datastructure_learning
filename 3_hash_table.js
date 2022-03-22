/** Hash table
 * A piece of data include a pair of key and value: { key: 'name', value: 'Marion'}
 * [ , , , , , ] each place is a bucket
 * Pros: O(1) o of one
 * insert, get, hash
 * Cons: data doesn't store reference to other peices of data in the data structure.
 */

function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

const HT = new HashTable(6)
// console.log(HT);

// Hash our key to a proper bucket
HashTable.prototype.hash = function (params) {
  let total = 0;
  for (let index = 0; index < params.length; index++) {
    total += params.charCodeAt(index)
  }
  const bucketPosition = total % this.numBuckets; // bucketPosition would be a number between 1~length -1
  return bucketPosition
}
// console.log(`Marion's hash position: ${HT.hash('Marion')}`);

// insert node
HashTable.prototype.insert = function (key, value) {
  // 1.find the index and search in the array
  let index = this.hash(key);
  // 2. if the index bucket is empty, then insert
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  // 2.2 allow to update current data
  else if (this.buckets[index].key === key) this.buckets[index].value = value;
  else {
  // 3. if the bucket is occupied, then serach till the last of the chain.
  // use currentNode as the next-one indicatior.

    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value)

  }
}
HT.insert('Gilee', 'gileeMaill@gmail.com')
HT.insert('David', 'david_1987@gmail.com')
HT.insert('Advid', 'david_1989@gmail.com')
HT.insert('Yale', 'YaleGreen@gmail.com')
HT.insert('Advid', 'david_1988@gmail.com')
console.log(HT.buckets);

// Get node
HashTable.prototype.get = function (key) {
  // 1. get index
  const index = this.hash(key);
  if (!this.buckets[index]) return null
  else {
    let currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value
      currentNode = currentNode.next
    }
    return null
  }
}

// Retrieve All
HashTable.prototype.retrieveAll = function () {
  const array = [];
  for (let index = 0; index < this.numBuckets; index++) {
      let currentNode = this.buckets[index] 
      while (currentNode)  {
        array.push(currentNode)
        currentNode = currentNode.next
      }
  }
  return array
}
console.log(HT.retrieveAll());