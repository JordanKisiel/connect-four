import React from 'react'
import logo from '../assets/logo.svg'
import Button from './Button'
import Board from './Board'
import MenuButton from './MenuButton'
import ColumnSelectButton from './ColumnSelectButton'

export default function Game(props){

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
    }

    function handleColSelect(isMoveToLeft){
        isMoveToLeft ? 
            setSelectedCol(prevCol => prevCol > 0 ? prevCol - 1 : 0):
            setSelectedCol(prevCol => prevCol < 6 ? prevCol + 1 : 6)
    }
    
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center p-4">
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
                    handleDisplay={() => {}}
                />
            </div>

            <Board
                selectedCol={selectedCol}
            />

            <div className="w-full flex justify-between items-center mb-12">
                <ColumnSelectButton
                    isLeft={true}
                    handleColSelect={handleColSelect}
                />
                <ColumnSelectButton
                    isLeft={false}
                    handleColSelect={handleColSelect}
                />
            </div>

            <MenuButton 
                bgColor="bg-red-300"
                textColor="text-neutral-100"
                textAlign="text-center"
                textDisplay="Drop!"
                bgImage=""
                handleDrop={() => handleDrop(selectedCol, true)} //hard-coded true is test
            />
        </div>
    )
}