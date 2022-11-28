import React from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

const gallowStages = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

function App() {
	const [errors, setErrors] = React.useState(0);
	const [word, setWord] = React.useState();
	const [selected, setSelected] = React.useState([]);
	const [displayedWord, setDisplayedWord] = React.useState([]);
	const [guess, setGuess] = React.useState("");
	const [gameWon, setGameWon] = React.useState(false)
	const [gameLost, setGameLost] = React.useState(false)
	const [endGame, setEndGame] = React.useState(false)
  console.log(word)
  console.log(displayedWord)
	return (
		<>
			<Jogo
				image={gallowStages}
				word={word}
				setWord={setWord}
				wordBank={palavras}
				errors={errors}
				setErrors={setErrors}
				img={`forca${errors}`}
				selected={selected}
				setSelected={setSelected}
        displayedWord={displayedWord}
        setDisplayedWord={setDisplayedWord}
		gameWon={gameWon}
			setGameWon={setGameWon}
			gameLost={gameLost}
			setGameLost={setGameLost}
			endGame={endGame}
			setEndGame={setEndGame}
			/>
			<Letras
				letra={alfabeto}
				word={word}
				selected={selected}
				setSelected={setSelected}
				displayedWord={displayedWord}
        		setDisplayedWord={setDisplayedWord}
				errors={errors}
				setErrors={setErrors}
				endGame={endGame}
				setEndGame={setEndGame}
			/>
			<Chute word={word} 
			errors={errors}
			setErrors={setErrors}
			guess={guess}
			setGuess={setGuess}
			gameWon={gameWon}
			setGameWon={setGameWon}
			gameLost={gameLost}
			setGameLost={setGameLost}
			endGame={endGame}
			setEndGame={setEndGame}
			/>
		</>
	);
}

export default App;
