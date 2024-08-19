class TreeNode {
    constructor(val) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// DFS
// InOrder Traversal
// - Left Root Right
function traverseInOrder(root) {
    if (!root) return

    traverseInOrder(root.left)

    console.log(root.value)

    traverseInOrder(root.right)
}

// PreOrder Traversal
// - Root Left Right
function traversePreOrder(root) {
    if (!root) return

    console.log(root.value)

    traverseInOrder(root.left)

    traverseInOrder(root.right)
}

// PostOrder Traversal
// - Left Right Root
function traversePostOrder(root) {
    if (!root) return

    traverseInOrder(root.left)

    traverseInOrder(root.right)

    console.log(root.value)
}

// BFS
// Level Order Traversal
// Enqueue Root
// Loop while queue is greater than 0:
// - Dequeue Root & Visit (dequeue = pop(), visit = console.log())
// - Enqueue Left of Dequeued if there is a Left
// - Enqueue Right of Dequeued if there is a Right

function levelOrderTraverse(root) {
    if (!root) return

    let queue = []
    queue.push(root)

    while (queue.length > 0) {
        let node = queue.pop()

        if (node.value) console.log(node.value)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
}
