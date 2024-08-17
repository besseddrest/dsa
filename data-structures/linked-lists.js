class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.values = []
    }

    get(index) {
        return this.values[index]
    }

    insertHead(val) {
        let tempNode = this.head
    }

    insertTail(val) {}

    remove(index) {
        if (!this.head) return false
        if (index === 0) {
            if (this.head.next) {
                this.head = this.head.next
            } else {
                this.head = null
            }
            return true
        }

        let temp = this.head
        let prev = null

        for (let j = 0; j < index; ++j) {
            if (j === index - 1) {
                prev = temp
                if (temp.next) {
                    prev.next = temp.next
                } else {
                    prev.next = null
                }
                return true
            }

            temp = temp.next
        }

        return false
    }

    getValues() {
        return this.values
    }
}

class LinkedNode {
    constructor(val) {
        this.value = val
        this.next = null
    }
}
