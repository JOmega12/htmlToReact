import './App.css';
import Header from './components/header';
import TopCharacters from './components/TopCharacters';
import CharacterCards from './components/CharacterCards';

import characters from './characters';

import './style.css';
import './reset.css';


function App() {
  // console.log(characters, 'characters')

  return (
    <div className='body'>
      <Header />
      <TopCharacters characters = {characters}/>
      <CharacterCards characters = {characters}/>
    </div>
  )
}

export default App
