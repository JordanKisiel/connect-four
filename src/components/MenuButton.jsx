import React from 'react'

export default function MenuButton(props){
    
    return (
        <button 
            className={`
                ${props.bgColor} 
                ${props.textColor} 
                ${props.bgImage}
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
                pl-5
                pr-32
                w-full
                text-left
            `}
        >
            {props.textDisplay}
        </button>
    )
}