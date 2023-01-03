import React from 'react'
import redIndicator from '../assets/column-indicator-red.svg'
import yellowIndicator from '../assets/column-indicator-yellow.svg'

export default function ColumnIndicator(props){

    let imageSrc = ''
    if(props.isPlayer1Turn){
        imageSrc = redIndicator
    }
    else{
        imageSrc = yellowIndicator
    }

    return(
        <div className="absolute -top-[3.2rem] z-10">
            <img src={imageSrc} />
        </div>
    )
}