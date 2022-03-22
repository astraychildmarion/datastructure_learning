/** Binary tree
 * Recusion: a function calls itself until base case is satisfied
 * Factorial function:
 * function factorial(num) {
 *  if (num > 10) { // base case
      return num 
    } else { // recursive case
      return num * factorial(n-1)
    }
 * }
 */

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (newV) {
  if (newV > this.value) {
    // is right has a child node ? 
    // if no ,then create a new BST
    // if already has, then ask the next tree
    if (!this.right) this.right = new BST(newV)
    else this.right.insert(newV)
  } else {
    if (!this.left) this.left = new BST(newV)
    else this.left.insert(newV)
  }
}
const bst = new BST(50)
bst.insert(30)
bst.insert(56)
bst.insert(29)
bst.insert(32)
bst.insert(51)
bst.insert(66)
bst.insert(87)

BST.prototype.contains = function (newV) {
  if (newV === this.value) return true;
  if (newV > this.value) {
    if (!this.right) return false;
    else return this.right.contains(newV);
  } else {
    if (!this.left) return false;
    else this.left.contains(newV);
  };
}

console.log(`bst contains : 50 `, bst.contains(50));
// console.log(`bst contains : 55 `, bst.contains(55));
// console.log(`bst contains : 25 `, bst.contains(25));

// * Depth first traversal
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value) // 29, 32, 30, 51, 87, 66, 56, 50
  // search all the branch of the tree
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order)
  if (order === 'in-order') iteratorFunc(this.value) // 29, 30, 32, 50, 51, 56, 66, 87
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order)
  if (order === 'post-order') iteratorFunc(this.value) // 50, 30, 29, 32, 56, 51, 66, 87
}
function log(v) {
  console.log(v);
}
// bst.depthFirstTraversal(log, 'post-order');

// * Breadth First Traversal
BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
  const queue = [this] // root node
  while (queue.length) {
    const treeNode = queue.shift()
    iteratorFunc(treeNode)
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
}

bst.breadthFirstTraversal(log) // 50, 30, 56, 29, 32, 51, 66, 87

BST.prototype.getMinVal = function () {
  if (this.left) return this.left.getMinVal()
  else return this.value
}
BST.prototype.getMaxVal = function () {
  if (this.right) return this.right.getMaxVal()
  else return this.value
}
console.log(`max is: ` + bst.getMaxVal())
console.log(`min is: ` + bst.getMinVal())

/** Pros and Cons of binary search tree
 * good to be a balance tree
 * fast: O(log n)
 * usage: dictionary, phonebook, users 
 */
