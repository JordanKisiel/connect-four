import React from 'react'

export default function MenuButton(props){
    
    return (
        <button
            onClick={props.handlerFunction}
            className={`
                ${props.bgColor} 
                ${props.textColor} 
                ${props.bgImage}
                ${props.textAlign}
                rounded-3xl
                shadow-2xl
                border-[3px]
                border-neutral-900
                font-bold
                text-2xl
                uppercase
                bg-no-repeat
                bg-[center_right_1rem]
                py-5
                px-5
                w-full
            `}
        >
            {props.textDisplay}
        </button>
    )
}