import React from 'react'
import redCounter from '../assets/counter-red-small.svg'
import yellowCounter from '../assets/counter-yellow-small.svg'
import invisibleCounter from '../assets/counter-invisible-small.svg'
import winningMark from '../assets/winning-mark.svg'

export default function Space(props){

    //keep spaces filled but make them look empty
    //this is to make animation render correctly
    let counter = ''

    if(props.value === null){
        counter = invisibleCounter
    }
    else if(props.value === true){
        counter = redCounter
    }
    else{
        counter = yellowCounter
    }

    const isWinningSlot = props.winningSlots.some((coord) => {
        return coord[0] === props.rowIndex && coord[1] === props.colIndex
    })

    return (
        <div className="-z-10 relative">
            {isWinningSlot && <img className="z-10 absolute w-1/2 left-1/4 top-1/4" src={winningMark} /> }
            <img src={counter} />
        </div>
    )
}