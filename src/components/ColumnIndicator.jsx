import React from 'react'
import redIndicator from '../assets/column-indicator-red.svg'
import yellowIndicator from '../assets/column-indicator-yellow.svg'
import indicator from '../assets/column-indicator.svg'

export default function ColumnIndicator(){


    return(
        <div className="absolute -top-[3.2rem] z-10">
            <img src={indicator} />
        </div>
    )
}