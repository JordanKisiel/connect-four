import React from 'react'
import redLeftButton from '../assets/arrow-left-red.svg'
import redRightButton from '../assets/arrow-right-red.svg'
import yellowLeftButton from '../assets/arrow-left-yellow.svg'
import yellowRightButton from '../assets/arrow-right-yellow.svg'

export default function ColumnSelectButton(props){

    let image = ''

    if(props.isFirstPlayerTurn){
        if(props.isLeft){
            image = redLeftButton
        }
        else{
            image = redRightButton
        }
    }
    else{
        if(props.isLeft){
            image = yellowLeftButton
        }
        else{
            image = yellowRightButton
        }
    }

    return (
        <img
            onClick={() => props.handleColSelect(props.isLeft)}
            src={image}
        />
    )
}