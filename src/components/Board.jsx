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
                index={index}
                selectedCol={props.selectedCol}
                board={props.board}
                isFirstPlayerTurn={props.isFirstPlayerTurn}
            />
        )
    })

    return (
        <>
            <div className="relative w-full aspect-square">
                <img className="absolute top-0 border-neutral-900 border-2 rounded-3xl shadow-2xl" src={board} alt="board" />
                <div className="absolute top-[0.66rem] left-2.5 grid grid-cols-7 gap-[0.52rem]">
                    { columns }
                </div>
                <img className="absolute top-1 border-neutral-900 border-2 rounded-3xl -z-20" src={boardBG} alt="board" />
            </div>
        </>
    )
}