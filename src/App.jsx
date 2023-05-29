// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/header';
import TopCharacters from './components/TopCharacters';
import CharacterCards from './components/CharacterCards';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <Header />
    <TopCharacters />
    <CharacterCards />
    </>
  )
}

export default App
