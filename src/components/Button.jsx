import React from 'react'

export default function Button(props){

    return (
        <button 
            onClick={props.handleDisplay || props.handleRestart || props.handleNewGame} 
            className={
                `${props.bgColor} 
                ${props.textColor} 
                rounded-full 
                ${props.paddingX} 
                py-2 
                uppercase`}>
            {props.textDisplay}
        </button>
    )
}