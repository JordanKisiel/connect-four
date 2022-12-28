import React from 'react'
import redCounter from '../assets/counter-red-small.svg'
import yellowCounter from '../assets/counter-yellow-small.svg'

export default function Space(props){

    //keep spaces filled but make them look empty
    //this is to make animation render correctly
    let invisible = ''

    if(props.value === null){
        invisible = 'opacity-0'
    }

    return (
        <div className="-z-10">
            <img className={`${invisible}`} src={props.value === true ? redCounter : yellowCounter} />
        </div>
    )
}