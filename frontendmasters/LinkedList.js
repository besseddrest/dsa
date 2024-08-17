class LinkedList {
    constructor() {
        this.head = new LinkedNode(-1)
        this.tail = this.head
    }

    get(i) {}

    insertHead() {}

    insertTail() {}

    remove(i) {}

    getValues() {}
}

class LinkedNode {
    constructor(val) {
        this.value = val
        this.next = null
    }
}
