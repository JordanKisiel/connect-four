import React from 'react'
import Button from './Button'

export default function ResultDisplay(props){

    return(
        <div className="
            bg-neutral-100
            text-neutral-900
            text-center
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
            w-full"
        >
            <span>Player 1</span>
            <span>Wins</span>
            <Button
                bgColor="bg-purple-300"
                textColor="text-neutral-100"
                padding-X="p-4"
                handleNewGame={props.handleNewGame}
                textDisplay="Play Again"
            />
        </div>
    )
}