import React from 'react'
import Background from './components/Background'
import FileDropArea from './components/FileDropArea'
import NamingArea from './components/NamingArea'
import ConfirmButton from './components/ConfirmButton'
import NetworkSelectionArea from './components/NetworkSelectionArea'

function App() {
  return (
    <Background>
      <FileDropArea />
      <NamingArea />
      <NetworkSelectionArea />
      <ConfirmButton />
    </Background>
  )
}

export default App