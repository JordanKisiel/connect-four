import React from 'react'
import redIndicator from '../assets/column-indicator-red.svg'
import yellowIndicator from '../assets/column-indicator-yellow.svg'
import invisibleIndicator from '../assets/column-indicator-invisible.svg'

export default function ColumnIndicator(props){

    let imageSrc = invisibleIndicator
    
    if(props.rowIndex === props.selectedCol){
        if(props.isPlayer1Turn){
            imageSrc = redIndicator
        }
        else{
            imageSrc = yellowIndicator
        }
    }

    return(
        <div className="z-10 -mt-[90%] w-[70%] mx-auto">
            <img className='w-full' src={imageSrc} />
        </div>
    )
}