import React from 'react'
import { getBestMove, getWinningSlots, isBoardFull, isBoardEmpty } from '../utilities/ConnectFourUtil'
import logo from '../assets/logo.svg'
import Button from './Button'
import Board from './Board'
import MenuButton from './MenuButton'
import ColumnSelectButton from './ColumnSelectButton'
import ResultDisplay from './ResultDisplay'

export default function Game(props){

    const aiDelay = 500 //delay between AI actions in milliseconds

    //board state initializes with null for empty spaces
    //later, spaces filled with true will represent the discs
    //of first player
    //false will be of the second player
    const [board, setBoard] = React.useState(() => {
        return Array(7).fill(Array(6).fill(null))
    })

    //selected col is the index of the selected column on the board
    //initialized to 3 because that is the center column on the board
    const [selectedCol, setSelectedCol] = React.useState(3)

    //keep track of player turn
    const [isPlayer1Turn, setIsPlayer1Turn] = React.useState(true)

    //keep track of which player made the first move this game
    const [isPlayer1First, setIsPlayer1First] = React.useState(true)

    //keep track of whether current game has ended
    //this could be because a player won or there is a draw
    const [isGameOver, setIsGameOver] = React.useState(false)

    React.useEffect(() => {
        //change whose turn it is if a selected column to drop in was not full
        //and if no win is detected
        //and if the board is not empty (this protects against the first run of the useEffect
        //changing the turn without a drop)
        const isWin = getWinningSlots(board).length !== 0

        //if there is a win or draw, the game is over
        if(isWin || isBoardFull(board)){
            setIsGameOver(prevValue => !prevValue)
        }

        //change the player turn if the game isn't over
        if(board[selectedCol].includes(null) && !isWin && !isBoardEmpty(board)){
            setIsPlayer1Turn(prevValue => !prevValue)
        }
        
    }, [board])

    //plays AI move when it's player2's turn
    React.useEffect(() => {
        //make the AI move if it's not player 1's turn (player 1 is always a human player)
        if(!isPlayer1Turn){
            console.log('play ai move?')
            playAIMove(getBestMove(board, false))
        }
    }, [isPlayer1Turn])

    //function to take selected column as an index
    //and update the board state to represent a disc being
    //dropped in that column
    //true = first player disc
    //false = second player disc
    function handleDrop(selectedColIndex, isFirstPlayerDisc){
        setBoard(prevBoard => {
            return prevBoard.map((col, index) => {
                const isNull = (element) => element === null
                const firstNullIndex = col.findIndex(isNull)
                return index === selectedColIndex ?
                            col.map((space, index) => {
                                return index === firstNullIndex ? isFirstPlayerDisc : space
                            })  
                            : col
            })
        })

        //reset selected column back to middle after move is made
        setSelectedCol(3)
    }

    function handleColSelect(isMoveToLeft){
        isMoveToLeft ? 
            setSelectedCol(prevCol => prevCol > 0 ? prevCol - 1 : 0):
            setSelectedCol(prevCol => prevCol < 6 ? prevCol + 1 : 6)
    }

    function handleRestart(){
        //only allow restarts before current game ends
        if(!isGameOver){
            //empty board
            setBoard(Array(7).fill(Array(6).fill(null)))

            //return selected column to middle
            setSelectedCol(3)

            //set turn back to first player
            setIsPlayer1Turn(isPlayer1First)
        }
    }

    function handleNewGame(){
        //empty board
        setBoard(Array(7).fill(Array(6).fill(null)))

        //return selected column to middle
        setSelectedCol(3)

        //player that makes the first move of the new game is the opposite of who made it last game
        setIsPlayer1Turn(!isPlayer1First)

        //reflect the fact that this game started with the opposite player
        setIsPlayer1First(prevValue => !prevValue)

        //reset game over state
        setIsGameOver(false)
    }

    function getBGToUse(isWinner, isPlayer1Turn){
        //3 possible backgrounds to use based upon state of game
        const playBG = 'bg-[url(/src/assets/bg-shape-mobile.svg)]'
        const player1WinsBG = 'bg-[url(/src/assets/bg-shape-mobile-red.svg)]'
        const player2WinsBG = 'bg-[url(/src/assets/bg-shape-mobile-yellow.svg)]'

        if(isWinner && isPlayer1Turn){
            return player1WinsBG
        }
        else if(isWinner && !isPlayer1Turn){
            return player2WinsBG
        }
        else{
            return playBG
        }
    }

    //function takes in a column index (from getAIMove function)
    //calls handleColSelect with delays so player can see what is happening
    //then drops disc in column index
    function playAIMove(colIndex){
        //is passed to handleColSelect to move to left or right
        //3 is the index of the center column
        //in the case that AI move is the center column,
        //handleColSelect will be called 0 times so left/right direction doesn't matter
        const isMoveToLeft = colIndex <= 3
        const colMoves = Math.abs(3 - colIndex)
        
        //custom wrapper that calls setInterval but limits it
        //to N times and returns a promise that resolves when all calls are complete
        //based on https://stackoverflow.com/a/2956980/20048656
        function delayedColSelectN(callback, delay, repetitions, isMoveToLeft){
            const intervalDone = new Promise((resolve, reject) => {
                let i = 0
                const intervalID = setInterval(() => {
                    if(i === repetitions){
                        clearInterval(intervalID)
                        resolve('intervals complete')
                    }

                    callback(isMoveToLeft)

                    i++
                }, delay)
            })

            return intervalDone
        }

        delayedColSelectN(handleColSelect, aiDelay, colMoves, isMoveToLeft)
            .then(() => {
                setTimeout(handleDrop(colIndex, false), aiDelay)
            })
        
    }
    
    return (
        <div 
            className={
                `relative 
                h-[100vh] 
                flex 
                flex-col 
                items-center 
                px-4 
                pt-16 
                ${getBGToUse(getWinningSlots(board).length !== 0, isPlayer1Turn)} 
                bg-no-repeat 
                bg-contain 
                bg-bottom`
                }
        >
            <div className="relative w-full flex justify-between items-center mb-32">
                <Button 
                    textDisplay="Menu" 
                    bgColor="bg-purple-500" 
                    textColor="text-neutral-100" 
                    paddingX="px-8"
                    handleDisplay={props.handleDisplay} 
                />
                <img className="absolute left-1/2 -translate-x-1/2" src={logo} alt="logo" />
                <Button 
                    textDisplay="Restart" 
                    bgColor="bg-purple-500" 
                    textColor="text-neutral-100" 
                    paddingX="px-6" 
                    handleRestart={handleRestart}
                />
            </div>

            <Board
                selectedCol={selectedCol}
                board={board}
                isPlayer1Turn={isPlayer1Turn}
                winningSlots={getWinningSlots(board)}
            />

            {!isGameOver &&
                <div className="w-full flex justify-between items-center mb-12">
                    <ColumnSelectButton
                        isLeft={true}
                        handleColSelect={handleColSelect}
                        isPlayer1Turn={isPlayer1Turn}
                    />
                    <ColumnSelectButton
                        isLeft={false}
                        handleColSelect={handleColSelect}
                        isPlayer1Turn={isPlayer1Turn}
                    />
                </div>
            }

            {!isGameOver &&
                <MenuButton 
                    bgColor={isPlayer1Turn ? "bg-red-300" : "bg-yellow-300"}
                    textColor={isPlayer1Turn ? "text-neutral-100" : "text-neutral-900"}
                    textAlign="text-center"
                    textDisplay="Drop!"
                    bgImage=""
                    handleDrop={() => handleDrop(selectedCol, isPlayer1Turn)}
                />
            }

            {isGameOver && 
                <ResultDisplay
                    isPlayer1Turn={isPlayer1Turn}
                    isWinner={getWinningSlots(board).length !== 0}
                    handleNewGame={handleNewGame}
                />
            }
        </div>
    )
}