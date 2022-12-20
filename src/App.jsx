import React from 'react'
import MainMenu from './components/MainMenu'

function App() {

  const [display, setDisplay] = React.useState(['main-menu'])

  const currentDisplay = display[display.length - 1]

  return (
    <>
      {(currentDisplay === 'main-menu') && <MainMenu />}
    </>
  )
}

export default App
