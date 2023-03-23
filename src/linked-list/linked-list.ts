export class ListNode {
  data: number
  nextNode: ListNode | null

  constructor (data: number, nextNode: ListNode | null) {
    this.data = data
    this.nextNode = nextNode
  }
}

export class LinkedList {
  list: ListNode[]

  constructor (list: ListNode[]) {
    this.list = list
  }

  append (listNode: ListNode): void {
    // Setting original end of list's nextNode to appended ListNode.
    if (
      this.list.length > 0 &&
      this.list[this.list.length - 1].nextNode === null
    ) {
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
    if (this.list.length === 0) return 0

    let length = 0
    let currentNode = this.list[0]
    while (currentNode.nextNode !== null) {
      length = ++length
      currentNode = currentNode.nextNode
    }
    length = ++length

    return length
  }

  head (): ListNode {
    return this.list[0]
  }

  tail (): ListNode | null {
    if (this.list.length === 0) return null
    if (this.list.length === 1) return this.list[0]

    let currentNode = this.list[0]
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }

    return currentNode
  }

  at (index: number): ListNode | null {
    if (index < 0) return null
    if (index > this.size()) return null

    let currentNode: ListNode = this.list[0]
    for (let i = 1; i < index; i++) {
      if (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode
      }
    }
    return currentNode
  }

  contains (value: number): boolean {
    // Iterate through list,
    let currentNode: ListNode | null = this.list[0]
    if (currentNode.data === value) return true

    while (currentNode !== null) {
      //    check if each 'data' value is value
      //    if value matches return true
      if (currentNode.data === value) return true

      if (currentNode.nextNode === null) {
        currentNode = null
      } else {
        currentNode = currentNode.nextNode
      }
    }
    return false
  }

  pop (): void {
    // Iterate through list,
    let currentNode: ListNode | null = this.list[0]
    let previousNode: ListNode
    while (currentNode !== null) {
      previousNode = currentNode
      currentNode = currentNode.nextNode
      if (currentNode?.nextNode === null) {
        previousNode.nextNode = null
        this.list.pop()
        break
      }
    }
  }

  find (value: number): number {
    // Iterate through list,
    let currentNode: ListNode | null = this.list[0]
    if (currentNode.data === value) return 1

    let matchIndex = 1
    while (currentNode !== null) {
      //    check if each 'data' value is value
      //    if value matches return true
      if (currentNode.data === value) return matchIndex

      if (currentNode.nextNode === null) {
        currentNode = null
        return -1
      } else {
        currentNode = currentNode.nextNode
        matchIndex++
      }
    }
    return -1
  }

  toString (): string {
    // Iterate through list,
    let string = ''
    let currentNode: ListNode | null = this.list[0]

    while (currentNode !== null) {
      if (currentNode.nextNode !== null) {
        string = string + '( ' + currentNode.data.toString() + ' ) -> '
      } else {
        string = string + '( ' + currentNode.data.toString() + ' )'
      }
      currentNode = currentNode.nextNode
    }

    return string
  }
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

console.log(list.head())

console.log(list.tail())

console.log(list.at(3))

console.log(list.contains(2))

console.log(list)

list.pop()

console.log(list)

console.log(list.find(0))

console.log(list.toString())
