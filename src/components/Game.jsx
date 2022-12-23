import React from 'react'
import logo from '../assets/logo.svg'
import Button from './Button'
import Board from './Board'
import MenuButton from './MenuButton'

export default function Game(props){

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center p-4 gap-20">
            <div className="relative w-full flex justify-between items-center">
                <Button 
                    textDisplay="Menu" 
                    bgColor="bg-purple-500" 
                    textColor="text-neutral-100" 
                    paddingX="px-8"
                    handleDisplay={props.handleDisplay} 
                />
                <img className="absolute left-1/2 -translate-x-1/2" src={logo} alt="logo" />
                <Button 
                    textDisplay="Restart" 
                    bgColor="bg-purple-500" 
                    textColor="text-neutral-100" 
                    paddingX="px-6" 
                    handleDisplay={() => {}}
                />
            </div>

            <Board />

            <MenuButton 
                bgColor="bg-red-300"
                textColor="text-neutral-100"
                textAlign="text-center"
                textDisplay="Drop!"
                bgImage=""
            />
        </div>
    )
}