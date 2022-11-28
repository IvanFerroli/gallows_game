import React from "react";

export default function Jogo(props) {
	const gallowStage = props.image;
    const displayedWord = props.displayedWord
	const words = props.wordBank;
	const word = props.word;
	const spltWord = word ? word.split("") : [];
	const underlined = spltWord.map(() => " __ ");
	const selected = props.selected;
    const gameWon = props.gameWon;
	const setGameWon = props.setGameWon
	const gameLost = props.gameLost;
	const setGameLost = props.setGameLost
	const errors = props.errors;
    const setErrors = props.setErrors;
    const endGame = props.endGame
    const setEndGame = props.setEndGame

    const incompleteWord = (selected.length === 0 ? underlined : displayedWord)

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
    function chooseNewWord(){
        debugger;
            if(gameWon === true)
            {
                setErrors(0)
                props.setWord(words[randomInt(0, 187)]);
            }
            props.setWord(words[randomInt(0, 187)]);
        }
    
    gameLost? setErrors(6) : console.log("nada novo sob o sol")
    gameLost? setEndGame(true) : console.log("nada novo sob o sol")
    gameWon? setEndGame(true) : console.log("nada novo sob o sol")
    
    function wordClass() {
        if(endGame === true && gameWon === true) {
            return "won"
        }else if(endGame === true && gameLost === true) {
            return "lost"
        }else{
            return "game-on"
        }
    }

	return (
		<div className="game-container">
			<img src={gallowStage[props.errors]} alt="batata" />
			<button
				className="start-button"
				onClick={chooseNewWord}
			>
				Escolher palavra
			</button>
			<span className={wordClass()}>{endGame ? word : incompleteWord}
            </span>
		</div>
	);
}

