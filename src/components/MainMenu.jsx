import React from "react"
import logo from "../assets/logo.svg"
import MenuButton from "./MenuButton"

export default function MainMenu(props){

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center p-4">
            <img className="mb-16" src={logo} alt="logo" />
            <div className="w-full space-y-6">
                <MenuButton 
                    bgColor="bg-red-300" 
                    textColor="text-neutral-100" 
                    textDisplay="Play vs CPU"
                    bgImage="bg-[url(/src/assets/player-vs-cpu.svg)]"
                />
                <MenuButton 
                    bgColor="bg-yellow-300" 
                    textColor="text-neutral-900" 
                    textDisplay="Play vs Player"
                    bgImage="bg-[url(/src/assets/player-vs-player.svg)]"
                />
                <MenuButton 
                    bgColor="bg-neutral-100" 
                    textColor="text-neutral-900" 
                    textDisplay="Game Rules"
                    bgImage=""
                    handleDisplay={props.handleDisplay}
                />
            </div>
        </div>
    )
}