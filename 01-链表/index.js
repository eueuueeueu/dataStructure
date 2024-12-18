// 创建列表
(function (window) {
  let prototype = {
    // 向链表尾部添加一个新元素
    push(element) {
      let node = createNode(element)
      let current
      if (this.head === null) {
        this.head = node
      } else {
        current = this.head
        while (current.next !== null) {
          current = current.next//获得最后一项
        }
        // 最后一项的下一项赋值node,就添加进去了
        current.next = node
      }
      this.count++
    },
    // 向链表的特定位置插入一个新元素
    insert(element, position) {
      if (index >= 0 && index <= this.count) {
        const node = new Node(element)
        if (index === 0) {
          // 在第一个位置添加
          const current = this.head
          node.next = current
          this.head = node
        } else {
          const provious = this.getElementAt(index - 1)
          const current = provious.next
          node.next = current
          provious.next = node
        }
        this.count++
        return true
      }
      return false
    },
    // 返回链表中特定位置的元素。不存在则返回undefined
    getElementAt(index) {
      if (index >= 0 && index <= this.count) {
        let node = this.head
        for (let i = 0; i < index && node !== null; i++) {
          node = node.next
        }
        return node
      }
      return undefined
    },
    // 从链表中移除一个元素
    remove(element) {
      let current = this.head
      let previous
      while (current.element !== element) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      this.count--
      return current.element
    },
    // 返回元素在链表中的索引。如果链表中没有该元素则返回-1
    indexOf(element) {
      let current = this.head
      let index = 0
      while (current.element !== element) {
        current = current.next
        index++
      }
      return this.getElementAt(index).element === element ? index : '-1'
    },
    // 从链表中的特定位置移除一个元素
    removeAt(index) {
      // 检查越界值
      if (index >= 0 && index < this.count) {
        let current = this.head
        // 移除第一项
        if (index === 0) {
          this.head = current.next
        } else {
          const previous = this.getElementAt(index - 1)
          current = previous.next
          // 将previous与current的下一项链接起来:跳过current,从而移除它
          previous.next = current.next
        }
        this.count--
        return current.element
      }
      return undefined;//index越界了就返回undefined
    },
    // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
    isEmpty() {
      return this.count === 0
    },
    // 返回链表包含的元素个数，与数组的length属性类似
    size() {
      return this.count
    },
    // 返回表示整个链表的字符串
    toString() {
      let resStr = ''
      let current = this.head
      while (current !== null) {
        resStr += current.element//最后一次加的是链表的最后一个元素
        current = current.next//最后一次current指向最后一个元素的next，也就是null
      }
      return resStr
    },
  }
  function createLinkedList() {
    let res = {
      count: 0,// 来存储链表中的元素数量
      head: null,// 第一个元素的引用
    }
    res.__proto__ = prototype
    return res
  }
  function createNode(element) {
    return {
      element: element,
      next: null,
    }
  }
  window.createLinkedList = createLinkedList
})(window)
let list = createLinkedList()
console.log(list);
list.push('第一个元素')
list.push('第二个元素')
list.push('第三个元素')
list.push('第四个元素')
// list.removeAt(0)
// list.remove('第四个元素')
console.log(list);
console.log(list.indexOf('第三个元素'));
console.log(list.isEmpty());
console.log(list.size());
console.log(list.toString());
