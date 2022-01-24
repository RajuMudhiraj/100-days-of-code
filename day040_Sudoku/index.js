
var bd1 = [
    [null, null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null, null,],
]


console.log(solve(bd1))

function solve(board) {

    if (validBoard(board)) {

        if (solved(board)) {
            return board
        }
        else {
            const possibilities = nextBoards(board)
            const validBoards = keepOnlyValid(possibilities)
            return searchForSolution(validBoards)
        }
    }
    else {
        return "The input is invalid"
    }
}


function searchForSolution(boards) {

    if (boards.length < 1) {
        return false
    }
    else {
        // backtracking search for solution
        var first = boards.shift()
        const tryPath = solve(first)
        if (tryPath != false) {
            return tryPath
        }
        else {
            return searchForSolution(boards)
        }
    }
}


function solved(board) {

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] == null) {
                return false
            }
        }
    }
    return true
}

function nextBoards(board) {

    var res = []
    const firstEmpty = findEmptySquare(board)

    if (firstEmpty != undefined) {
        const y = firstEmpty[0]
        const x = firstEmpty[1]

        for (var i = 1; i <= 9; i++) {
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

function findEmptySquare(board) {

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] == null) {
                return [i, j]
            }
        }
    }
}


function keepOnlyValid(boards) {

    var res = []
    for (var i = 0; i < boards.length; i++) {
        if (validBoard(boards[i])) {
            res.push(boards[i])
        }
    }
    return res
}


function validBoard(board) {

    return rowsGood(board) && columnsGood(board) && boxesGood(board)
}

function rowsGood(board) {

    for (var i = 0; i < 9; i++) {
        var cur = []
        for (var j = 0; j < 9; j++) {
            if (cur.includes(board[i][j])) {
                return false
            }
            else if (board[i][j] != null) {
                cur.push(board[i][j])
            }
        }
    }
    return true
}


function columnsGood(board) {

    for (var i = 0; i < 9; i++) {
        var cur = []
        for (var j = 0; j < 9; j++) {
            if (cur.includes(board[j][i])) {
                return false
            }
            else if (board[j][i] != null) {
                cur.push(board[j][i])
            }
        }
    }
    return true
}


function boxesGood(board) {
    // transform this everywhere to update res
    const boxCoordinates = [[0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]]

    for (var y = 0; y < 9; y += 3) {
        for (var x = 0; x < 9; x += 3) {
            // each traversal should examine each box
            var cur = []
            for (var i = 0; i < 9; i++) {
                var coordinates = [...boxCoordinates[i]]
                coordinates[0] += y
                coordinates[1] += x
                if (cur.includes(board[coordinates[0]][coordinates[1]])) {
                    return false
                }
                else if (board[coordinates[0]][coordinates[1]] != null) {
                    cur.push(board[coordinates[0]][coordinates[1]])
                }
            }
        }
    }
    return true
}

