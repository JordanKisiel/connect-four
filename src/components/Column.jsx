import React from 'react'
import Space from './Space'
import ColumnIndicator from './ColumnIndicator'

export default function Column(props){

    //reverse array so that column renders bottom up
    const spaces = props.board[props.rowIndex].map((value, index) => {
        return (
            <Space 
                key={index} 
                value={value}
                rowIndex={props.rowIndex}
                colIndex={index}
                winningSlots={props.winningSlots}
            />
        )
    }).reverse()

    return (
        <div className="grid grid-rows-6 gap-[0.22rem]">
            { props.rowIndex === props.selectedCol 
                && <ColumnIndicator
                        isFirstPlayerTurn={props.isFirstPlayerTurn}
                    /> 
            }
            { spaces }
        </div>
    )
}