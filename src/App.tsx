import React from 'react'
import Background from './components/Background'
import FileDropArea from './components/FileDropArea'
import NamingArea from './components/NamingArea'

function App() {
  return (
    <Background>
      <FileDropArea />
      <NamingArea />
    </Background>
  )
}

export default App