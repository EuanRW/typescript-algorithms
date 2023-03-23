import { ListNode, LinkedList } from './linked-list'

describe('LinkedList', () => {
  let linkedList: LinkedList
  let node1: ListNode
  let node2: ListNode
  let node3: ListNode

  beforeEach(() => {
    // Create a connected linked list with three nodes
    node1 = new ListNode(1, null)
    node2 = new ListNode(2, null)
    node3 = new ListNode(3, null)
    node1.nextNode = node2
    node2.nextNode = node3
    linkedList = new LinkedList([node1, node2, node3])
  })

  describe('append', () => {
    it('should add a node to the end of the list', () => {
      const node4 = new ListNode(4, null)
      linkedList.append(node4)
      expect(linkedList.tail()).toEqual(node4)
    })

    it('appends a new node to an empty list', () => {
      const linkedList = new LinkedList([])
      const node = new ListNode(1, null)
      linkedList.append(node)
      expect(linkedList.size()).toBe(1)
      expect(linkedList.head()).toBe(node)
      expect(linkedList.tail()).toBe(node)
    })

    it('appends a new node to a list with one node', () => {
      const node1 = new ListNode(1, null)
      const linkedList = new LinkedList([node1])
      const node2 = new ListNode(2, null)
      linkedList.append(node2)
      expect(linkedList.size()).toBe(2)
      expect(linkedList.head()).toBe(node1)
      expect(linkedList.tail()).toBe(node2)
    })

    it('appends a new node to a list with multiple nodes', () => {
      const node4 = new ListNode(4, null)
      linkedList.append(node4)
      expect(linkedList.size()).toBe(4)
      expect(linkedList.head()).toBe(node1)
      expect(linkedList.tail()).toBe(node4)
      expect(linkedList.at(3)).toBe(node3)
      expect(linkedList.at(4)).toBe(node4)
    })

    test('appends a chain of nodes to a list', () => {
      const node1 = new ListNode(1, null)
      const node2 = new ListNode(2, null)
      const node3 = new ListNode(3, null)
      node2.nextNode = node3
      const linkedList = new LinkedList([node1])
      linkedList.append(node2)
      expect(linkedList.size()).toBe(3)
      expect(linkedList.head()).toBe(node1)
      expect(linkedList.tail()).toBe(node3)
      expect(linkedList.at(1)).toBe(node1)
      expect(linkedList.at(2)).toBe(node2)
      expect(linkedList.at(3)).toBe(node3)
      expect(linkedList.list[0].nextNode).toBe(node2)
    })
  })

  describe('prepend', () => {
    it('should add a node to the beginning of the list', () => {
      const node0 = new ListNode(0, null)
      linkedList.prepend(node0)
      expect(linkedList.head()).toEqual(node0)
    })

    it('should prepend a single node to the beginning of the list', () => {
      const node1 = new ListNode(1, null)
      const list = new LinkedList([node1])

      const node0 = new ListNode(0, null)
      list.prepend(node0)

      expect(list.size()).toBe(2)
      expect(list.head()).toBe(node0)
      expect(list.tail()).toBe(node1)
      expect(list.list[0].nextNode).toBe(node1)
      expect(list.at(0)).toBe(node0)
      expect(list.contains(0)).toBe(true)
      expect(list.contains(1)).toBe(true)
    })

    it('should prepend a chain of nodes to the beginning of the list', () => {
      const node1 = new ListNode(1, null)
      const list = new LinkedList([node1])

      const nodeMinus2 = new ListNode(-2, null)
      const nodeMinus1 = new ListNode(-1, null)
      const node0 = new ListNode(0, null)
      nodeMinus2.nextNode = nodeMinus1
      nodeMinus1.nextNode = node0
      list.prepend(nodeMinus2)

      expect(list.size()).toBe(4)
      expect(list.head()).toBe(nodeMinus2)
      expect(list.tail()).toBe(node1)
      expect(list.list[2].nextNode).toBe(node1)
      expect(list.at(1)).toBe(nodeMinus2)
      expect(list.at(2)).toBe(nodeMinus1)
      expect(list.at(3)).toBe(node0)
      expect(list.at(4)).toBe(node1)
    })
  })

  describe('size', () => {
    it('should return the length of the list', () => {
      expect(linkedList.size()).toEqual(3)
    })
  })

  describe('head', () => {
    it('should return the first node in the list', () => {
      expect(linkedList.head()).toEqual(node1)
    })
  })

  describe('tail', () => {
    it('should return the last node in the list', () => {
      const node3 = new ListNode(3, null)
      expect(linkedList.tail()).toEqual(node3)
    })

    test('returns null for an empty list', () => {
      const linkedList = new LinkedList([])
      expect(linkedList.tail()).toBeNull()
    })

    test('returns the last node for a list with one node', () => {
      const node = new ListNode(1, null)
      const linkedList = new LinkedList([node])
      expect(linkedList.tail()).toBe(node)
    })
  })

  describe('at', () => {
    it('should return the node at the given index', () => {
      expect(linkedList.at(1)).toEqual(linkedList.head())
      expect(linkedList.at(2)).toEqual(linkedList.head().nextNode)
      expect(linkedList.at(3)).toEqual(linkedList.tail())
    })

    it('should return null if index is greater than the size of the list', () => {
      expect(linkedList.at(4)).toBeNull()
    })

    it('should return null if index is negative', () => {
      expect(linkedList.at(-1)).toBeNull()
    })
  })
})
