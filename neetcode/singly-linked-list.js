class LinkedList {
    constructor() {
        this.head = null
        this.currNode = null
        this.tail = null
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let currNode = this.head
        let i = 0
        do {
            if (!currNode) return -1
            if (i === index) return currNode.value
            ++i
            currNode = currNode.next
        } while (currNode)
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        if (!this.head) {
            this.head = new LinkedListNode(val)
        }

        let temp = this.head

        if (temp.next) {
            const newNode = new LinkedListNode(val)
            this.head = newNode
            newNode.next = temp
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        if (!this.head) {
            this.head = new LinkedListNode(val)
            return
        }

        let currNode = this.head

        while (currNode.next) {
            currNode = currNode.next
        }

        currNode.next = new LinkedListNode(val)
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head

        // return if nothing
        if (!curr) return false

        // delete at head
        if (index === 0) {
            if (curr.next) {
                curr = curr.next
            } else {
                curr = null
            }

            return true
        }

        let prev = curr
        curr = this.head.next

        // delete middle
        let i = 0
        while (i !== index) {
            if (!curr) return false

            if (i === index - 1) {
                if (curr.next) {
                    curr = curr.next
                    prev.next = curr
                } else {
                    curr = null
                }
                return true
            }

            prev = prev.next
            curr = curr.next

            ++i
        }

        // delete end
        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        if (!this.head) return []

        let arr = []
        let tempNode = this.head

        do {
            arr.push(tempNode.value)
            tempNode = tempNode.next
        } while (tempNode)

        return arr
    }
}

class LinkedListNode {
    constructor(val) {
        this.value = val
        this.next = null
    }

    getValue() {
        return this.value
    }

    getNext() {
        return this.next
    }
}
