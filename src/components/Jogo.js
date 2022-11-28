import React from "react";

export default function Jogo(props) {
	const gallowStage = props.image;
    const displayedWord = props.displayedWord
    const setDisplayedWord = props.setDisplayedWord
	const words = props.wordBank;
	const word = props.word;
	const spltWord = word ? word.split("") : [];
	const underlined = spltWord.map(() => " __ ");
	const selected = props.selected;
    const setSelected = props.setSelected
    const gameWon = props.gameWon;
	const setGameWon = props.setGameWon
	const gameLost = props.gameLost;
	const setGameLost = props.setGameLost
	const errors = props.errors;
    const setErrors = props.setErrors;
    const endGame = props.endGame
    const setEndGame = props.setEndGame
    const joinedDisplayedWord = displayedWord.join('')
    const incompleteWord = (selected.length === 0 ? underlined : displayedWord)

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
    function chooseNewWord(){
        debugger;
            if(gameWon === true)
            {
                setGameWon(false)
                setErrors(0)
                setEndGame(false)
                setSelected([])
                setDisplayedWord([])
                props.setWord(words[randomInt(0, 187)]);
            }
            props.setWord(words[randomInt(0, 187)]);
        }
    
    gameLost? setErrors(6) : console.log("nada novo sob o sol")
    errors === 6? (setGameLost(true) && setEndGame(true)) : console.log("nada novo sob o sol")
    gameLost? setEndGame(true) : console.log("nada novo sob o sol")
    gameWon? setEndGame(true) : console.log("nada novo sob o sol")
    /* gameWon? alert("ganhou") : console.log("nada novo")
    gameLost? alert("perdeu") : console.log("nada novo") */
    word === joinedDisplayedWord? setGameWon(true) : console.log("nada novo sob o sol")
    console.log(`${word} e ${joinedDisplayedWord}`)
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

