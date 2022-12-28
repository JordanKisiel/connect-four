import React from 'react'
import redIndicator from '../assets/column-indicator-red.svg'
import yellowIndicator from '../assets/column-indicator-yellow.svg'

export default function ColumnIndicator(props){


    return(
        <div className="absolute -top-[3.2rem] z-10">
            <img src={props.isFirstPlayerTurn ? redIndicator : yellowIndicator} />
        </div>
    )
}