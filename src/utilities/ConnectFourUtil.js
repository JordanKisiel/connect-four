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
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
    [true, null, null, null, null, null],
    [null, null, false, null, null, null],
    [null, false, null, null, null, null],
    [false, null, null, null, null, null],
]



getEvaluation(testBoard1, true)

//###TESTED AND WORKS
//returns an evaluation score total based upon board position
function getEvaluation(board, isMaximizingPlayer){
    //score settings
    const centerColScore = 4
    const lineOf2Score = 2
    const lineOf3Score = 5
    const winScore = 100000 //arbitrarily large to make other scoring irrelevant
    const oppLineOf2Score = -2
    const oppLineOf3Score = -100

    let evalScore = 0

    //Win?
    const winningSlots = getWinningSlots(board)
    //use indices from winning slots
    const winningPlayer = winningSlots.length > 0 ? board[winningSlots[0][0]][winningSlots[0][1]] : null
    //update score and return immediately (no need to do anymore evaluation)
    if(winningSlots.length !== 0 && winningPlayer === isMaximizingPlayer){
        console.log('Win!')
        evalScore += winScore
        return evalScore
    }

    //check center column for player discs
    const discsInCenter = board[3].reduce((occurences, curr) => {
        return curr === isMaximizingPlayer ? occurences + 1 : occurences + 0
    }, 0)

    //discs in center column?
    console.log('Discs in center: ', discsInCenter)
    evalScore += discsInCenter * centerColScore

    //lines of 2?
    console.log('Lines of 2: ', getNumLinesOf2(board, isMaximizingPlayer))
    evalScore += getNumLinesOf2(board, isMaximizingPlayer) * lineOf2Score

    //lines of 3?
    console.log('Lines of 3: ', getNumLinesOf3(board, isMaximizingPlayer))
    evalScore += getNumLinesOf3(board, isMaximizingPlayer) * lineOf3Score

    //opp line of two?
    console.log('Opp Lines of 2: ', getNumLinesOf2(board, !isMaximizingPlayer))
    evalScore += getNumLinesOf2(board, !isMaximizingPlayer) * oppLineOf2Score

    //opp line of three?
    console.log('Opp Lines of 3: ', getNumLinesOf3(board, !isMaximizingPlayer))
    evalScore += getNumLinesOf3(board, !isMaximizingPlayer) * oppLineOf3Score

    //return final eval score
    console.log('Final score: ', evalScore)
    return evalScore
}

//return best column to drop disc in
function getBestMove(board){
    let bestValue = Number.NEGATIVE_INFINITY
    let bestMove = undefined

    //for each column, run the minimax function and return col with optimum value
    //only test columns that have an empty space still available
}

//function returns max score it can find assuming other player is also
//playing perfectly
function minimax(board, depth, isMaximizingPlayer){
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
function getWinningSlots(board){
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
function isBoardFull(board){
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
function getChildPositions(board, isMaximizingPlayer){
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

//###TESTED AND WORKS
//returns the number of lines of 2 (used for position evaluation)
//todo: it's possible that I made this function more complex than it needs to be
//review at a future date
//canMakeWinningLine function also has side effect (duplicatedLinesCount)
function getNumLinesOf2(board, player){
    let linesOf2 = []
    const width = board.length
    const height = board[0].length
    let duplicatedLinesCount = 0 //see canMakeLiningWin function

    //testing functions
    const isExactly2PlayerDiscs = (line) => {
        const numOfMatchingDiscs = line.reduce((accum, curr) => {
            return curr === player ? accum + 1 : accum + 0
        }, 0)

        return numOfMatchingDiscs === 2
    }

    const isOnlyEmptyBetweenDiscs = (line) => {
        for(let i = 1; i < line.length; i++){
            if(line[i] === player){
                return true
            }
            else if(line[i] === !player){
                return false
            }
        }
        return false //shouldn't get here because 2 discs should be guaranteed
    }

    const isNotLineOf3 = (line, contextSlots) => {
        if(line[3] === player){
            return true
        }
        else if(line[2] === player){
            return contextSlots[0] !== player //if first context slot is anything but the player return true
        }
        else if(line[1] === player){
            return contextSlots[0] !== player && contextSlots[1] !== player //same but with both context slots
        }
        
        return false //shouldn't get here
    }

    const canMakeWinningLine = (line, contextSlots) => {
        if(line[3] === player){
            //this is used later to account for lines that follow the [t, _, _, t] pattern
            //these lines should only be counted once so this number will be divided by two
            //and subtracted from the total
            //not elegant but would probably have to change the whole algoritm to be able to identify unique
            //lines based on indices and prevent double counting that way
            duplicatedLinesCount += 1 
            return true //because in between slots are guaranteed to be empty
        }
        else if(line[2] === player){
            return line[3] === null || contextSlots[0] === null //only need one of these slots to be empty
        }
        else if(line[1] === player){
            //only need to test following slots and not preceding because lines are generated in all directions and I don't want the
            //same line counted twice unless it can make two distinct lines of 4
            const isBothFollowingEmpty = line[2] === null && line[3] === null
            const isOneLeftAndOneRightEmpty = line[2] === null && contextSlots[0] === null

            return isBothFollowingEmpty || 
                   isOneLeftAndOneRightEmpty
        }

        return false //shouldn't make it here
    }

    //verification function that combines all the testing functions
    const isLineOf2 = (line, contextSlots) => {
        
        return isExactly2PlayerDiscs(line) &&
               isOnlyEmptyBetweenDiscs(line) &&
               isNotLineOf3(line, contextSlots) &&
               canMakeWinningLine(line, contextSlots)
    }

    for(let row = 0; row < width; row++){
        for(let col = 0; col < height; col++){
            const slot = board[row][col]

            if(slot === player){

                //look right
                let lineToCheck = [slot,
                                   row + 1 < 7 ? board[row + 1][col] : 'out of bounds',
                                   row + 2 < 7 ? board[row + 2][col] : 'out of bounds',
                                   row + 3 < 7 ? board[row + 3][col] : 'out of bounds']
                
                let contextSlots = [row - 1 >= 0 ? board[row - 1][col] : 'out of bounds',
                                    row - 2 >= 0 ? board[row - 2][col] : 'out of bounds']
                                      
                if(isLineOf2(lineToCheck, contextSlots)){
                    linesOf2.push(lineToCheck)
                }

                //look up
                lineToCheck = [slot,
                               col + 1 < 6 ? board[row][col + 1] : 'out of bounds',
                               col + 2 < 6 ? board[row][col + 2] : 'out of bounds',
                               col + 3 < 6 ? board[row][col + 3] : 'out of bounds']

                contextSlots = [col - 1 >= 0 ? board[row][col - 1] : 'out of bounds',
                                col - 2 >= 0 ? board[row][col - 2] : 'out of bounds']
                     
                if(isLineOf2(lineToCheck, contextSlots)){
                    linesOf2.push(lineToCheck)
                }

                //look left
                lineToCheck = [slot,
                               row - 1 >= 0 ? board[row - 1][col] : 'out of bounds',
                               row - 2 >= 0 ? board[row - 2][col] : 'out of bounds',
                               row - 3 >= 0 ? board[row - 3][col] : 'out of bounds']

                contextSlots = [row + 1 < 7 ? board[row + 1][col] : 'out of bounds',
                                row + 2 < 7 ? board[row + 2][col] : 'out of bounds']
                     
                if(isLineOf2(lineToCheck, contextSlots)){
                    linesOf2.push(lineToCheck)
                }

                //look down
                lineToCheck = [slot,
                               col - 1 >= 0 ? board[row][col - 1] : 'out of bounds',
                               col - 2 >= 0 ? board[row][col - 2] : 'out of bounds',
                               col - 3 >= 0 ? board[row][col - 3] : 'out of bounds']

                contextSlots = [col + 1 < 6 ? board[row][col + 1] : 'out of bounds',
                                col + 2 < 6 ? board[row][col + 2] : 'out of bounds']
                    
                if(isLineOf2(lineToCheck, contextSlots)){
                    linesOf2.push(lineToCheck)
                }

                //look up & right
                lineToCheck = [slot,
                               row + 1 < 7 && col + 1 < 6 ? board[row + 1][col + 1] : 'out of bounds',
                               row + 2 < 7 && col + 2 < 6 ? board[row + 2][col + 2] : 'out of bounds',
                               row + 3 < 7 && col + 3 < 6 ? board[row + 3][col + 3] : 'out of bounds']

                contextSlots = [row - 1 >= 0 && col - 1 >= 0 ? board[row - 1][col - 1] : 'out of bounds',
                                row - 2 >= 0 && col - 2 >= 0 ? board[row - 2][col - 2] : 'out of bounds']
         
                if(isLineOf2(lineToCheck, contextSlots)){
                    linesOf2.push(lineToCheck)
                }

                //look up & left
                lineToCheck = [slot,
                               row - 1 >= 0 && col + 1 < 6 ? board[row - 1][col + 1] : 'out of bounds',
                               row - 2 >= 0 && col + 2 < 6 ? board[row - 2][col + 2] : 'out of bounds',
                               row - 3 >= 0 && col + 3 < 6 ? board[row - 3][col + 3] : 'out of bounds']

                contextSlots = [row + 1 < 7 && col - 1 >= 0 ? board[row + 1][col - 1] : 'out of bounds',
                                row + 2 < 7 && col - 2 >= 0 ? board[row + 2][col - 2] : 'out of bounds']

                if(isLineOf2(lineToCheck, contextSlots)){
                    linesOf2.push(lineToCheck)
                }

                //look down & left
                lineToCheck = [slot,
                               row - 1 >= 0 && col - 1 >=0 ? board[row - 1][col - 1] : 'out of bounds',
                               row - 2 >= 0 && col - 2 >=0 ? board[row - 2][col - 2] : 'out of bounds',
                               row - 3 >= 0 && col - 3 >=0 ? board[row - 3][col - 3] : 'out of bounds']

                contextSlots = [row + 1 < 7 && col + 1 < 6 ? board[row + 1][col + 1] : 'out of bounds',
                                row + 2 < 7 && col + 2 < 6 ? board[row + 2][col + 2] : 'out of bounds']

                if(isLineOf2(lineToCheck, contextSlots)){
                    linesOf2.push(lineToCheck)
                }

                //look down & right
                lineToCheck = [slot,
                               row + 1 < 7 && col - 1 >=0 ? board[row + 1][col - 1] : 'out of bounds',
                               row + 2 < 7 && col - 2 >=0 ? board[row + 2][col - 2] : 'out of bounds',
                               row + 3 < 7 && col - 3 >=0 ? board[row + 3][col - 3] : 'out of bounds']

                contextSlots = [row - 1 >= 0 && col + 1 < 6 ? board[row - 1][col + 1] : 'out of bounds',
                                row - 2 >= 0 && col + 2 < 6 ? board[row - 2][col + 2] : 'out of bounds']

                if(isLineOf2(lineToCheck, contextSlots)){
                    linesOf2.push(lineToCheck)
                }
            }
        }
    }

    return linesOf2.length - (duplicatedLinesCount / 2)
}

//###TESTED AND WORKS
//return the number of lines of 3 (used for position evaluation)
function getNumLinesOf3(board, player){
    let linesOf3 = []
    const width = board.length
    const height = board[0].length
    let duplicatedLinesCount = 0

    //testing functions
    const isExactly3PlayerDiscs = (line) => {
        const numOfMatchingDiscs = line.reduce((accum, curr) => {
            return curr === player ? accum + 1 : accum + 0
        }, 0)

        return numOfMatchingDiscs === 3
    }

    const isEmptySpaceInLine = (line) => {
        //verified if at least 1 space is a null (empty)
        return line.some(slot => slot === null)
    }

    //function that combines testing functions
    const isLineOf3 = (line) => {
        return isExactly3PlayerDiscs(line) && isEmptySpaceInLine(line)
    }

    //looks for two specific patterns that get double counted and need to be only single counted
    const isDuplicatedLine = (line) => {
        return (line[1] === null || line[2] === null)
    }

    for(let row = 0; row < width; row++){
        for(let col = 0; col < height; col++){
            let slot = board[row][col]

            if(slot === player){
                //look right
                let lineToCheck = [slot,
                                   row + 1 < 7 ? board[row + 1][col] : 'out of bounds',
                                   row + 2 < 7 ? board[row + 2][col] : 'out of bounds',
                                   row + 3 < 7 ? board[row + 3][col] : 'out of bounds']

                let contextSlots = [row - 1 >= 0 ? board[row - 1][col] : 'out of bounds',
                                    row - 2 >= 0 ? board[row - 2][col] : 'out of bounds']
                    
                if(isLineOf3(lineToCheck)){
                    linesOf3.push(lineToCheck)
                    duplicatedLinesCount = isDuplicatedLine(lineToCheck) ? duplicatedLinesCount + 1 : duplicatedLinesCount
                }

                //look up
                lineToCheck = [slot,
                               col + 1 < 6 ? board[row][col + 1] : 'out of bounds',
                               col + 2 < 6 ? board[row][col + 2] : 'out of bounds',
                               col + 3 < 6 ? board[row][col + 3] : 'out of bounds']

                contextSlots = [col - 1 >= 0 ? board[row][col - 1] : 'out of bounds',
                                col - 2 >= 0 ? board[row][col - 2] : 'out of bounds']
          
                if(isLineOf3(lineToCheck, contextSlots)){
                    linesOf3.push(lineToCheck)
                    duplicatedLinesCount = isDuplicatedLine(lineToCheck) ? duplicatedLinesCount + 1 : duplicatedLinesCount
                }

                //look left
                lineToCheck = [slot,
                               row - 1 >= 0 ? board[row - 1][col] : 'out of bounds',
                               row - 2 >= 0 ? board[row - 2][col] : 'out of bounds',
                               row - 3 >= 0 ? board[row - 3][col] : 'out of bounds']

                contextSlots = [row + 1 < 7 ? board[row + 1][col] : 'out of bounds',
                                row + 2 < 7 ? board[row + 2][col] : 'out of bounds']
                    
                if(isLineOf3(lineToCheck, contextSlots)){
                    linesOf3.push(lineToCheck)
                    duplicatedLinesCount = isDuplicatedLine(lineToCheck) ? duplicatedLinesCount + 1 : duplicatedLinesCount
                }

                //look down
                lineToCheck = [slot,
                               col - 1 >= 0 ? board[row][col - 1] : 'out of bounds',
                               col - 2 >= 0 ? board[row][col - 2] : 'out of bounds',
                               col - 3 >= 0 ? board[row][col - 3] : 'out of bounds']

                contextSlots = [col + 1 < 6 ? board[row][col + 1] : 'out of bounds',
                                col + 2 < 6 ? board[row][col + 2] : 'out of bounds']
                    
                if(isLineOf3(lineToCheck, contextSlots)){
                    linesOf3.push(lineToCheck)
                    duplicatedLinesCount = isDuplicatedLine(lineToCheck) ? duplicatedLinesCount + 1 : duplicatedLinesCount
                }

                //look up & right
                lineToCheck = [slot,
                               row + 1 < 7 && col + 1 < 6 ? board[row + 1][col + 1] : 'out of bounds',
                               row + 2 < 7 && col + 2 < 6 ? board[row + 2][col + 2] : 'out of bounds',
                               row + 3 < 7 && col + 3 < 6 ? board[row + 3][col + 3] : 'out of bounds']

                contextSlots = [row - 1 >= 0 && col - 1 >= 0 ? board[row - 1][col - 1] : 'out of bounds',
                                row - 2 >= 0 && col - 2 >= 0 ? board[row - 2][col - 2] : 'out of bounds']

                if(isLineOf3(lineToCheck, contextSlots)){
                    linesOf3.push(lineToCheck)
                    duplicatedLinesCount = isDuplicatedLine(lineToCheck) ? duplicatedLinesCount + 1 : duplicatedLinesCount
                }

                //look up & left
                lineToCheck = [slot,
                               row - 1 >= 0 && col + 1 < 6 ? board[row - 1][col + 1] : 'out of bounds',
                               row - 2 >= 0 && col + 2 < 6 ? board[row - 2][col + 2] : 'out of bounds',
                               row - 3 >= 0 && col + 3 < 6 ? board[row - 3][col + 3] : 'out of bounds']

                contextSlots = [row + 1 < 7 && col - 1 >= 0 ? board[row + 1][col - 1] : 'out of bounds',
                                row + 2 < 7 && col - 2 >= 0 ? board[row + 2][col - 2] : 'out of bounds']

                if(isLineOf3(lineToCheck, contextSlots)){
                    linesOf3.push(lineToCheck)
                    duplicatedLinesCount = isDuplicatedLine(lineToCheck) ? duplicatedLinesCount + 1 : duplicatedLinesCount
                }

                //look down & left
                lineToCheck = [slot,
                               row - 1 >= 0 && col - 1 >=0 ? board[row - 1][col - 1] : 'out of bounds',
                               row - 2 >= 0 && col - 2 >=0 ? board[row - 2][col - 2] : 'out of bounds',
                               row - 3 >= 0 && col - 3 >=0 ? board[row - 3][col - 3] : 'out of bounds']

                contextSlots = [row + 1 < 7 && col + 1 < 6 ? board[row + 1][col + 1] : 'out of bounds',
                                row + 2 < 7 && col + 2 < 6 ? board[row + 2][col + 2] : 'out of bounds']

                if(isLineOf3(lineToCheck, contextSlots)){
                    linesOf3.push(lineToCheck)
                    duplicatedLinesCount = isDuplicatedLine(lineToCheck) ? duplicatedLinesCount + 1 : duplicatedLinesCount
                }

                //look down & right
                lineToCheck = [slot,
                               row + 1 < 7 && col - 1 >=0 ? board[row + 1][col - 1] : 'out of bounds',
                               row + 2 < 7 && col - 2 >=0 ? board[row + 2][col - 2] : 'out of bounds',
                               row + 3 < 7 && col - 3 >=0 ? board[row + 3][col - 3] : 'out of bounds']

                contextSlots = [row - 1 >= 0 && col + 1 < 6 ? board[row - 1][col + 1] : 'out of bounds',
                                row - 2 >= 0 && col + 2 < 6 ? board[row - 2][col + 2] : 'out of bounds']

                if(isLineOf3(lineToCheck, contextSlots)){
                    linesOf3.push(lineToCheck)
                    duplicatedLinesCount = isDuplicatedLine(lineToCheck) ? duplicatedLinesCount + 1 : duplicatedLinesCount
                }
            }
        }
    }

    return linesOf3.length - (duplicatedLinesCount / 2)
}