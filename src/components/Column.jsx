import React from 'react'
import Space from './Space'
import ColumnIndicator from './ColumnIndicator'

export default function Column(props){

    const boardRows = 6

    const spaceArray = Array(boardRows).fill('')

    const spaces = spaceArray.map((row, index) => {
        return (
            <Space key={index} />
        )
    })

    return (
        <div className="grid grid-rows-6 gap-[0.22rem]">
            { props.index === props.selectedCol && <ColumnIndicator /> }
            { spaces }
        </div>
    )
}