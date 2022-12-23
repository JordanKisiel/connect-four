import React from 'react'
import redIndicator from '../assets/column-indicator-red.svg'
import yellowIndicator from '../assets/column-indicator-yellow.svg'

export default function ColumnIndicator(){

    return(
        <img className="absolute -bottom-4 -left-1 z-10" src={redIndicator} />
    )
}