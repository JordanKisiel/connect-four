import React from 'react'
import board from '../assets/board.svg'
import boardBG from '../assets/board-bg.svg'
import Column from './Column'

export default function Board(props){

    const boardColumns = 7

    const columnArray = Array(boardColumns).fill('')

    const columns = columnArray.map((col, index) => {
        return (
            <Column 
                key={index}
                rowIndex={index}
                selectedCol={props.selectedCol}
                board={props.board}
                isPlayer1Turn={props.isPlayer1Turn}
                winningSlots={props.winningSlots}
            />
        )
    })

    return (
        <>
            <div className="relative w-full aspect-square md:w-[80%]">
                <img className="absolute top-1 rounded-3xl" src={boardBG} alt="board" />
                <div className="absolute w-[98%] left-[50%] -translate-x-[50%] aspect-square grid grid-cols-7">
                    { columns }
                </div>
                <img className="absolute top-0 rounded-3xl shadow-2xl" src={board} alt="board" />
            </div>
        </>
    )
}