# Algorithms

General notes from recent memory

## Binary Search

**Plain English**

-   array must be already sorted
-   low, mid, and hi pointers
-   find the midpoint
-   if val > mid, set lo to mid
-   if val <= set hi to mid
-   continue until val is found
-   do/while

**Big O**
O(log N) - only cause of 'protip'

## Bubble Sort

**Plain English**

-   start at first index
-   if greater than next index, swap
-   else, next iteration
-   final result after first iteration: largest at end
-   once we iterate over full length:
    -   next time thru you only have to go up to, but not including, the last position
-   one of those things where u just gotta use nested for loops

**Big O**

-   TBA

## Recursion

**Plain English**

-   a function that calls itself, and returns a value from the top of the stack when a base case is met
-   most important: 'what is the base case?'
-   3 parts to recursion:
    -   pre: run input thru base case
    -   recurse: where we call the function recursively
    -   post: ...not sure?
-   pro tip: keep recurse and checking separate

## QuickSort

**Plain English**

-   uses "divide and conquery"
-   choose a pivot point
    -   step through items on left
        -   if less than or equal to, move to index
        -   if greater than, swap w
