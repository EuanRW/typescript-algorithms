class ListNode {
  data: number
  nextNode: ListNode | null

  constructor (data: number, nextNode: ListNode | null) {
    this.data = data
    this.nextNode = nextNode
  }
}

class LinkedList {
  list: ListNode[]

  constructor (list: ListNode[]) {
    this.list = list
  }

  append (listNode: ListNode): void {
    // Setting original end of list's nextNode to appended ListNode.
    if (this.list.length > 0 && this.list[this.list.length - 1].nextNode === null) {
      this.list[this.list.length - 1].nextNode = listNode
    }

    this.list.push(listNode)

    if (listNode.nextNode !== null) {
      this.append(listNode.nextNode)
    }
  }

  prepend (listNode: ListNode): void {
    // Iterate though 'listNode' chain prepending them to 'prependArray'.
    const prependArray: ListNode[] = []
    while (listNode.nextNode !== null) {
      prependArray.push(listNode)
      listNode = listNode.nextNode
    }
    // Setting final node in the 'listNode' chain's nextNode to be the first original node in 'this.list'
    listNode.nextNode = this.list[0]
    prependArray.push(listNode)

    this.list = [...prependArray, ...this.list]
  }

  size (): number {
    if (this.list.length === 0) {
      return 0
    }

    let length = 0
    let currentNode = this.list[0]
    while (currentNode.nextNode !== null) {
      length = ++length
      currentNode = currentNode.nextNode
    }
    length = ++length

    return length
  }

  head (): ListNode {}

  tail (): ListNode {}
}

const tailNode = new ListNode(2, null)

const midNode = new ListNode(1, tailNode)

const headNode = new ListNode(0, null)

const prependNode2 = new ListNode(-1, null)

const preprendNode1 = new ListNode(-2, prependNode2)

const list = new LinkedList([headNode])

list.append(midNode)

list.prepend(preprendNode1)

console.log(list.size())

console.log(list)
