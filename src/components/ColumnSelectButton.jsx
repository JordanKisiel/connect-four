import React from 'react'
import leftButton from '../assets/arrow-left.svg'
import rightButton from '../assets/arrow-right.svg'

export default function ColumnSelectButton(props){

    return (
        <img
            onClick={() => props.handleColSelect(props.isLeft)}
        src={props.isLeft ? leftButton : rightButton} />
    )
}