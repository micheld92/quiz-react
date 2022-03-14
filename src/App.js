import './App.css';
import React , { useState, useContext } from 'react'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen';
import { GameStateContext } from './Helpers/Context'
import { QuizContext } from './Helpers/Context';


function App() {
  const [gameState, setGameState] = useState("menu"); //tela inicial será o menu
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz com React Js</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu/>}
        {gameState === "quiz" && <Quiz/>}
        {gameState === "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
