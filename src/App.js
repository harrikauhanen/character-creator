import React from 'react'

import CharacterEditor from './components/CharacterEditor'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <CharacterEditor />
      <div
        style={{
          backgroundColor: 'hsl(195deg, 20%, 86%)',
          position: 'fixed',
          width: '100%',
          height: '40%',
          bottom: '0px',
        }}
      ></div>
      <Footer />
    </>
  )
}

export default App
