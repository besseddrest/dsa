function sumRowNumbers(arrArr) {
    let sum = 0

    arrArr.forEach((arr) => {
        sum += Math.max(...arr) + Math.min(...arr)
    })

    return sum
}

const nums = [
    [1, 1, 2], // 3
    [2, 2, 3], // 5
    [3, 3, 4], // 7
    [4, 4, 5], // 9
]
console.log(sumRowNumbers(nums)) // 24
