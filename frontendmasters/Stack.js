class Stack {
    constructor() {
        this.top = null
        this.length = 0
    }

    push(val) {
        const item = new Item(val)

        if (this.top) {
            let temp = this.top
            item.prev = temp
        }

        this.top = item

        this.length++
    }

    pop() {
        if (!this.top) {
            return undefined
        }

        const val = this.top.val
        this.top = this.top.prev
        this.length--
        return val
    }
}

class Item {
    constructor(val) {
        this.value = val
        this.prev = null
    }
}
