import React from 'react'
import Space from './Space'

export default function Column(){

    const boardRows = 6

    const spaceArray = Array(boardRows).fill('')

    const spaces = spaceArray.map((row, index) => {
        return (
            <Space key={index} />
        )
    })

    return (
        <div className="grid grid-rows-6 gap-[0.22rem]">
            { spaces }
        </div>
    )
}