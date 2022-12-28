import React from 'react'
import Space from './Space'
import ColumnIndicator from './ColumnIndicator'

export default function Column(props){

    //reverse array so that column renders bottom up
    const spaces = props.board[props.index].map((value, index) => {
        return (
            <Space 
                key={index} 
                value={value}
            />
        )
    }).reverse()

    return (
        <div className="grid grid-rows-6 gap-[0.22rem]">
            { props.index === props.selectedCol 
                && <ColumnIndicator
                        isFirstPlayerTurn={props.isFirstPlayerTurn}
                    /> 
            }
            { spaces }
        </div>
    )
}