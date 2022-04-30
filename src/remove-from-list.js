const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} list
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class LList {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function removeKFromList(l, k) {
  if (!l.value) return null;
  let list = l;
  let filterList = null;

  while (list && list.value === k) {
    list = list.next;
  }
  filterList = list;

  let currentHead = list;

  while (currentHead.next) {
    if (currentHead.next.value === k) {
      currentHead.next = currentHead.next.next;
    } else {
      currentHead = currentHead.next;
    }
  }
  return filterList;
}

module.exports = {
  removeKFromList
};
