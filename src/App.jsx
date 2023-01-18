import React from 'react'
import MainMenu from './components/MainMenu'
import Rules from './components/Rules'
import Game from './components/Game'

export default function App() {

  const [display, setDisplay] = React.useState(['main-menu']) //options: 'main-menu', 'rules', 'game-vs-cpu'
  let currentDisplay = display[display.length - 1]

  const [difficulty, setDifficulty] = React.useState('') //options: 'easy', 'medium', 'hard', ''


  function handleDisplay(displayOption){
    setDisplay(prevDisplay => [...prevDisplay, displayOption])
  }

  function handleChooseDifficulty(difficulty){
    setDifficulty(difficulty)
  }

  return (
    <>
      {
        (currentDisplay === 'main-menu') && 
          <MainMenu 
            handleRulesDisplay={() => handleDisplay('rules')}
            handleGameDisplay={() => handleDisplay('game-vs-cpu')}
            handleChooseDifficulty={handleChooseDifficulty}
          />
      }
      {(currentDisplay === 'rules') && <Rules handleDisplay={() => handleDisplay('main-menu')} />}
      {
        (currentDisplay === 'game-vs-cpu' && difficulty !== '') && 
          <Game 
            handleDisplay={() => handleDisplay('main-menu')} 
            difficulty={difficulty}
            handleChooseDifficulty={handleChooseDifficulty}
          />
      }
    </>
  )
}
