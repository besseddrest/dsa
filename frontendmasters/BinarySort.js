function binarySort(haystack, needle) {
    let lo = 0
    let hi = arr.length

    // cond 1: val = pos
    // ret pos

    // cond 2: val > pos
    // lo = m + 1

    // cond 3: val < pos
    // hi = m

    do {
        const pos = Math.floor(lo + (hi - lo) / 2)
        const val = haystack[pos]

        if (val === needle) {
            return true
        } else if (val > needle) {
            hi = pos
        } else {
            lo = pos + 1
        }
    } while (lo < hi)
}
