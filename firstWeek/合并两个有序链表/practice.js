// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 输入：l1 = [], l2 = []
// 输出：[]

// 输入：l1 = [], l2 = [0]
// 输出：[0]

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */

 var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode(0)
  let pre = dummy
  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          pre.next = l1
          l1 = l1.next
      } else {
          pre.next = l2
          l2 = l2.next
      }
      pre = pre.next
  }
  pre.next = l1 === null ? l2 : l1

  return dummy.next
};