import React from "react"
import logo from "../assets/logo.svg"
import ChooseDifficulty from "./ChooseDifficulty"
import MenuButton from "./MenuButton"

export default function MainMenu(props){

    const [displayDifficulty, setDisplayDifficulty] = React.useState(false)

    function handleDifficultyDisplay(){
        setDisplayDifficulty(prevValue => !prevValue)
    }

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center p-4 mx-auto sm:max-w-xl md:justify-start md:mt-[30%] lg:mt-[22%]">
            <img className="mb-16" src={logo} alt="logo" />
            <div className="w-full space-y-6">
                <MenuButton 
                    bgColor="bg-red-300" 
                    textColor="text-neutral-100"
                    textAlign="text-left" 
                    textDisplay="Play vs CPU"
                    bgImage="bg-[url(/src/assets/player-vs-cpu.svg)]"
                    handlerFunction={handleDifficultyDisplay}
                />
                {displayDifficulty && 
                    <ChooseDifficulty 
                        handleChooseDifficulty={props.handleChooseDifficulty}
                        handleGameDisplay={props.handleGameDisplay} 
                    />
                }
                <MenuButton 
                    bgColor="bg-yellow-300" 
                    textColor="text-neutral-900"
                    textAlign="text-left"  
                    textDisplay="Play vs Player"
                    bgImage="bg-[url(/src/assets/player-vs-player.svg)]"
                    handlerFunction={() => {}}
                />
                <MenuButton 
                    bgColor="bg-neutral-100" 
                    textColor="text-neutral-900"
                    textAlign="text-left"  
                    textDisplay="Game Rules"
                    bgImage=""
                    handlerFunction={props.handleRulesDisplay}
                />
            </div>
        </div>
    )
}