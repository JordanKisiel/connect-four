import React from 'react'
import redCounter from '../assets/counter-red-small.svg'
import yellowCounter from '../assets/counter-yellow-small.svg'

export default function Space(props){

    return (
        <div className="-z-10">
            <img className="" src={yellowCounter} />
        </div>
    )
}