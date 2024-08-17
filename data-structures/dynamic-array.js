class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.size = 0;
        this.myArr = new Array(capacity);
        this.capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.myArr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        // adding to end
        if (i === this.capacity - 1) {
            this.size = this.capacity;
        }
        this.myArr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        // resize if full
        if (this.size >= this.capacity) {
            this.resize();
        }
        this.set(this.size++, n);
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.get(--this.size)
    }

    /**
     * @returns {void}
     */
    resize() {
        const newArr = new Array(this.capacity);
        this.myArr = [ ...this.myArr, ...newArr]
        this.capacity = this.capacity * 2
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}

