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
        <div className='h-[85%] mt-[8%]'>
            <ColumnIndicator
                isPlayer1Turn={props.isPlayer1Turn}
                rowIndex={props.rowIndex}
                selectedCol={props.selectedCol}
            /> 
            <div className="grid grid-rows-6 mt-[30%]">
                
                { spaces }
            </div>
        </div>
    )
}