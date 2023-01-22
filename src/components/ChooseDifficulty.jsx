import React from 'react'
import MenuButton from './MenuButton'

export default function ChooseDifficulty(props){

    return (
        <div className='flex justify-between items-center gap-5'>
            <MenuButton
                handlerFunction={() => {
                        props.handleChooseDifficulty('easy')
                        props.handleGameDisplay()
                    }
                }
                bgColor='bg-purple-500'
                textColor='text-neutral-100'
                bgImage=''
                textAlign='text-center'
                textDisplay='Easy'
                padding='p-3'
            />
            <MenuButton
                handlerFunction={() => {
                        props.handleChooseDifficulty('medium')
                        props.handleGameDisplay()
                    }
                }
                bgColor='bg-purple-500'
                textColor='text-neutral-100'
                bgImage=''
                textAlign='text-center'
                textDisplay='Medium'
                padding='p-3'
            />
            <MenuButton
                handlerFunction={() => {
                        props.handleChooseDifficulty('hard')
                        props.handleGameDisplay()
                    }
                }
                bgColor='bg-purple-500'
                textColor='text-neutral-100'
                bgImage=''
                textAlign='text-center'
                textDisplay='Hard'
                padding='p-3'
            />    
        </div>
    )
}