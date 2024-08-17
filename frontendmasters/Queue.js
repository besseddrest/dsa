class Queue {
    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    enqueue(item) {
        const newNode = new Node(item)
        this.size++
        if (!this.tail) {
            this.tail = this.head = newNode
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    dequeue() {
        if (!this.head) return undefined

        this.size--

        const head = this.head
        this.head = this.head.next

        return head.value
    }

    peek() {
        if (this.head) return this.head.value
    }
}

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}
