import React from 'react'
import redLeftButton from '../assets/arrow-left-red.svg'
import redRightButton from '../assets/arrow-right-red.svg'
import yellowLeftButton from '../assets/arrow-left-yellow.svg'
import yellowRightButton from '../assets/arrow-right-yellow.svg'

export default function ColumnSelectButton(props){

    let leftOption = ''
    let rightOption = ''

    if(props.isPlayer1Turn){
        leftOption = redLeftButton
        rightOption = redRightButton
    }
    else{
        leftOption = yellowLeftButton
        rightOption = yellowRightButton
    }

    return (
        <button>
            <img
                onClick={() => props.handleColSelect(props.isLeft)}
                src={props.isLeft ? leftOption : rightOption}
            />
        </button>
    )
}