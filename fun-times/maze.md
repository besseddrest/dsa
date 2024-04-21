# Maze or "Path Finding"

Notes on a common interview problem

## General

### Data Points

-   start point
-   end point
-   maze & its boundaries
-   list of steps taken/path aka 'seen'
-   direction: constant that is used to traverse by x, y

### Logic

-   starting point, push to 'seen'
-   check each direction // this is the 'pre'
    -   if wall or beyond false
    -   if in 'seen', false
    -   if open && end, true
-   before move, push to 'seen'
-   if we've passed 'pre' checks, we recurse
-   recurse is walking in the direction
-   if all 4 directions have been 'seen', we pop()
    -   this is the 'post'
    -   make sure to return false after pop()
        -   "this didn't work, take a step back"
