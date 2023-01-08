/*
    Algorithm pseudo-code


    function minimax(position, depth, maximizingPlayer)
        //base case
        if depth === 0 OR game over in position
            return static evaluation of position
        
        if maximizingPlayer
            maxEval = -infinity
            for each child of position
                eval = minimax(child, depth - 1, false)
                maxEval = max(maxEval, eval)
            return maxEval
        
        else
            minEval = +infinity
            for each child of position
                eval = minimax(child, depth - 1, true)
                minEval = min(minEval, eval)
            return minEval

*/

const testBoard1 = 
[
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
]

const testBoard2 = 
[
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
]

const testBoard3 = 
[
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
    [false, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
]

const testBoard4 = 
[
    [true, true, true, true, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
]

const testBoard5 = 
[
    [true, null, null, null, null, null],
    [null, true, null, null, null, null],
    [null, null, true, null, null, null],
    [null, null, null, true, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
]

const testBoard6 = 
[
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, true, null, null],
    [null, null, true, null, null, null],
    [null, true, null, null, null, null],
    [true, null, null, null, null, null],
]

const testBoard7 = 
[
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, false, null, null],
    [null, null, false, null, null, null],
    [null, false, null, null, null, null],
    [false, null, null, null, null, null],
]

const testBoard8 = 
[
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
]

const testBoard9 = 
[
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
]

const testBoard10 = 
[
    [true, true, true, true, true, true],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
]

const testBoard11 = 
[
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
]

console.log(getLinesOfN(testBoard11, 2, true))

//return best column to drop disc in
export function getBestMove(board){
    let bestValue = Number.NEGATIVE_INFINITY
    let bestMove = undefined

    //for each column, run the minimax function and return col with optimum value
    //only test columns that have an empty space still available
}

//function returns max score it can find assuming other player is also
//playing perfectly
export function minimax(board, depth, isMaximizingPlayer){
    //base case
    const gameOver = (getWinningSlots(board).length !== 0 || isBoardFull(board))
    if(depth === 0 || gameOver){
        return evaluation(board, isMaximizingPlayer)
    }

    if(isMaximizingPlayer){
        let maxEval = Number.NEGATIVE_INFINITY
        getChildPositions(board).forEach((childPos) => {
            let currEval = minimax(childPos, depth - 1, !isMaximizingPlayer)
            maxEval = Math.max(maxEval, currEval)
        })
        return maxEval
    }
    else{
        let minEval = Number.POSITIVE_INFINITY
        getChildPositions(board).forEach((childPos) => {
            let currEval = minimax(childPos, depth - 1, !isMaximizingPlayer)
            minEval = Math.min(minEval, currEval)
        })
        return minEval
    }
}

//###TESTED AND WORKS
//returns winning slots (spaces) but can also be used
//to test if there's a winner at all (array length will be 0 if no winner)
export function getWinningSlots(board){
    const height = board[0].length
    const width = board.length
    const emptySlot = null

    for(let row = 0; row < width; row++){ 
        for(let col = 0; col < height; col++){
            let slot = board[row][col]

            if(slot === emptySlot){

                continue //don't check starting from empty slots
            }

            if(col + 3 < height &&
                slot === board[row][col + 1] && //look right
                slot === board[row][col + 2] &&
                slot === board[row][col + 3]){
                    return [[row, col],
                            [row, col + 1], 
                            [row, col + 2], 
                            [row, col + 3]]
            }

            if(row + 3 < width){
                if(slot === board[row + 1][col] && //look up
                   slot === board[row + 2][col] &&
                   slot === board[row + 3][col]){
                        return [[row, col], 
                                [row + 1, col], 
                                [row + 2, col], 
                                [row + 3, col]]
                }

                if(col + 3 < height &&
                    slot === board[row + 1][col + 1] && //look up & right
                    slot === board[row + 2][col + 2] &&
                    slot === board[row + 3][col + 3]){
                        return [[row, col],
                                [row + 1, col + 1], 
                                [row + 2, col + 2], 
                                [row + 3, col + 3]]
                }

                if(col - 3 >= 0 &&
                    slot === board[row + 1][col - 1] && //look up & left
                    slot === board[row + 2][col - 2] &&
                    slot === board[row + 3][col - 3]){
                        return [[row, col],
                                [row + 1, col - 1], 
                                [row + 2, col - 2], 
                                [row + 3, col - 3]]
                }
            }
        }
    }

    return [] //if no winning line, return no winning slots
}


//##TESTED AND WORKS
//check every space and return true only if there are no empty spaces
export function isBoardFull(board){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === null){
                return false
            }
        }
    }

    return true
}

//##TESTED AND WORKS
//returns every single possible next board from the current board position
export function getChildPositions(board, isMaximizingPlayer){
    let childPositions = []

    //for each column
    for(let i = 0; i < board.length; i++){
        //if column isn't full
        if(board[i][board[i].length - 1] === null){
            //update board with disc in that column
            const childBoard = board.map((col, index) => {
                //null testing function
                const isNull = (element) => element === null
                const firstNullIndex = col.findIndex(isNull)

                return index === i ?
                            col.map((space, index) => {
                                return index === firstNullIndex ? isMaximizingPlayer : space
                            })
                            :col
            })
            
            //push that new board into childPositions
            childPositions.push(childBoard)
        }
    }
    //return array of child positions
    return childPositions
}

//returns an evaluation score total based upon board position
export function evaluation(currentBoard, isMaximizingPlayer){
    //score settings
    const centerColScore = 4
    const lineOf2Score = 2
    const lineOf3Score = 5
    const winScore = 10000
    const oppLineOf2Score = -2
    const oppLineOf3Score = -100

    let evalScore = 0

    const discsInCenter = currentBoard[3].reduce((occurences, curr) => {
        return curr === isMaximizingPlayer ? 1 : 0
    })

    evalScore += discsInCenter * centerColScore

    //lines of 2? +2 for each of them
    evalScore += getLinesOfN(board, 2, isMaximizingPlayer).length * lineOf2Score

    //lines of 3? +5 for each of them
    evalScore += getLinesOfN(board, 3, isMaximizingPlayer).length * lineOf3Score

    //Win? +10000
    const winningSlots = getWinningSlots(currentBoard)
    if(winningSlots.length !== 0 && winningSlots[0][0] === isMaximizingPlayer){
        evalScore += winScore
    }

    //opp line of two? -2 for each
    evalScore += getLinesOfN(board, 2, !isMaximizingPlayer).length * oppLineOf2Score

    //opp line of three? -100 for each
    evalScore += getLinesOfN(board, 3, !isMaximizingPlayer).length * oppLineOf3Score

    //return final eval score
    return evalScore
}

//returns lines of 2 or 3 matching discs within 4 spaces of each other
//depends on value of n
export function getLinesOfN(board, n, player){
    const height = board[0].length
    const width = board.length
    const emptySlot = null

    let linesOfN = []

    const isExactlyLineOfN = (line) => {
        const numOfMatches = line.reduce((occurences, curr) => {
            return curr === player ? occurences + 1 : occurences + 0
        }, 0)

        return numOfMatches === n
    }

    for(let row = 0; row < width; row++){
        for(let col = 0; col < height; col++){
            let slot = board[row][col]

            if(slot === emptySlot){
                continue //don't check starting from empty slots
            }

            if(slot !== player){
                continue //don't check starting from opponent discs
            }

            if(col + (n - 1) < height){
                const lineToCheck = [slot, //look right
                                    board[row][col + 1], 
                                    col + 2 <= 7 ? board[row][col + 2] : null, 
                                    col + 3 <= 7 ? board[row][col + 3] : null]
                
                if(isExactlyLineOfN(lineToCheck)){
                    linesOfN.push(lineToCheck)
                }
            }

            if(row + (n - 1) < width){

                const lineToCheck = [slot, //look up
                                    board[row + 1][col],
                                    row + 2 <= 6 ? board[row + 2][col] : null,
                                    row + 3 <= 6 ? board[row + 3][col] : null]
                
                if(isExactlyLineOfN(lineToCheck)){
                    linesOfN.push(lineToCheck)
                }

                if(col + (n - 1) < height && slot){
                    const lineToCheck = [slot, //look up & right
                                        board[row + 1][col + 1],
                                        (col + 2 <= 7) && (row + 2 <= 6) ? board[row + 2][col + 2] : null,
                                        (col + 3 <= 7) && (row + 3 <= 6) ? board[row + 3][col + 3] : null]
                
                    if(isExactlyLineOfN(lineToCheck)){
                        linesOfN.push(lineToCheck)
                    }
                }

                if(col - 3 >= 0 && slot){
                    const lineToCheck = [slot, //look up & left
                                        board[row + 1][col - 1],
                                        (col - 2 >= 0) && (row + 2 <= 6) ? board[row + 2][col - 2] : null,
                                        (col -3 >= 0) && (row + 2 <= 6) ? board[row + 3][col - 3] : null]
                
                    if(isExactlyLineOfN(lineToCheck)){
                        linesOfN.push(lineToCheck)
                    }
                }
            }
        }
    }

    return linesOfN
}