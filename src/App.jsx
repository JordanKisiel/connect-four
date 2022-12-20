import React from 'react'
import MainMenu from './components/MainMenu'
import Rules from './components/Rules'

function App() {

  const [display, setDisplay] = React.useState(['main-menu']) //options: 'main-menu', 'rules'
  let currentDisplay = display[display.length - 1]


  function handleDisplay(displayOption){
    setDisplay(prevDisplay => [...prevDisplay, displayOption])
  }

  return (
    <>
      {(currentDisplay === 'main-menu') && <MainMenu handleDisplay={() => handleDisplay('rules')} />}
      {(currentDisplay === 'rules') && <Rules handleDisplay={() => handleDisplay('main-menu')} />}
    </>
  )
}

export default App
