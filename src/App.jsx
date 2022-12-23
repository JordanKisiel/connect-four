import React from 'react'
import MainMenu from './components/MainMenu'
import Rules from './components/Rules'
import Game from './components/Game'

function App() {

  const [display, setDisplay] = React.useState(['main-menu']) //options: 'main-menu', 'rules', 'game-vs-cpu'
  let currentDisplay = display[display.length - 1]


  function handleDisplay(displayOption){
    setDisplay(prevDisplay => [...prevDisplay, displayOption])
  }

  return (
    <>
      {
        (currentDisplay === 'main-menu') && 
          <MainMenu 
            handleRulesDisplay={() => handleDisplay('rules')}
            handleGameDisplay={() => handleDisplay('game-vs-cpu')}
          />
      }
      {(currentDisplay === 'rules') && <Rules handleDisplay={() => handleDisplay('main-menu')} />}
      {(currentDisplay === 'game-vs-cpu') && <Game handleDisplay={() => handleDisplay('main-menu')} />}
    </>
  )
}

export default App
