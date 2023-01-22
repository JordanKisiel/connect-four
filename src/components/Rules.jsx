import React from 'react'
import checkIcon from '../assets/icon-check.svg'

export default function Rules(props){

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center p-4 mx-auto sm:max-w-xl md:justify-start md:pt-[13rem]">
            <div className="relative bg-neutral-100 shadow-2xl border-[3px] border-neutral-900 rounded-[40px] px-6 pt-12 pb-16 space-y-10 flex flex-col items-center short:pt-6 short:space-y-5">
                <h2 className="text-6xl font-bold uppercase short:text-5xl">Rules</h2>
                <div className="space-y-4 short:space-y-2">
                    <h3 className="uppercase text-purple-400 font-bold text-xl">Objective</h3>
                    <p className="leading-5">Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
                </div>
                <div className="space-y-4">
                    <h3 className="uppercase text-purple-400 font-bold text-xl">How to Play</h3>
                    <ol className="ml-3 space-y-3 leading-5">
                        <li className="pl-3">Red goes first in the first game.</li>
                        <li className="pl-3">Players must alternate turns, and only one disc can be dropped in each turn</li>
                        <li className="pl-3">The game ends when there is a 4-in-a-row or a stalemate.</li>
                        <li className="pl-3">The starter of the previous game goes second on the next game.</li>
                    </ol>
                </div>
                <button onClick={props.handleDisplay} className="absolute -bottom-10 w-20 aspect-square">
                    <img src={checkIcon} />
                </button>
            </div>
        </div>
    )
}