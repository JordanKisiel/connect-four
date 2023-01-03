import React from 'react'
import Button from './Button'

export default function ResultDisplay(props){

    let winningPlayer = ''

    if(props.isWinner){
        if(props.isPlayer1Turn){
            winningPlayer = 'Player 1'
        }
        else{
            winningPlayer = 'Player 2'
        }
    }

    return(
        <div className="
            absolute
            top-[33.75rem]
            bg-neutral-100
            text-neutral-900
            rounded-3xl
            shadow-2xl
            border-[3px]
            border-neutral-900
            bg-no-repeat
            bg-[center_right_1rem]
            py-5
            px-5
            w-5/6
            flex
            flex-col
            items-center"
        >
            <span className="text-base font-bold text-center uppercase">{winningPlayer}</span>
            <span className="text-6xl font-bold text-center uppercase mb-1.5">{props.isWinner ? 'Wins' : 'Draw'}</span>
            <Button
                bgColor="bg-purple-500"
                textColor="text-neutral-100"
                paddingX="px-7"
                handleNewGame={props.handleNewGame}
                textDisplay="Play Again"
            />
        </div>
    )
}