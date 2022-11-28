export default function Chute(props) {
    const guess = props.guess
    const setGuess = props.setGuess
    const gameWon = props.gameWon;
	const setGameWon = props.setGameWon
	const gameLost = props.gameLost;
	const setGameLost = props.setGameLost
    const word = props.word
    const endGame = props.endGame
    const setEndGame = props.setEndGame

    console.log(`${guess} fora`)

    /* function throwGuess() {
        debugger;
        console.log(`${guess} dentro`)
        if(guess === word){
            setGameWon(true)
        }else{
            setGameLost(true)
        }
    } */

    return(
        <div className="guess-container">
            <input disabled={
						props.endGame === true ||
						props.word === null ||
						props.word === "" ||
                        props.word === undefined 
							? true
							: false
					} placeholder="chutar" value={guess} onChange={e => setGuess(e.target.value)}/>
            <button disabled={
						props.endGame === true ||
						props.word === null ||
						props.word === "" ||
                        props.word === undefined 
							? true
							: false
					} onClick={() => (guess === word) ? setGameWon(true) : setGameLost(true)}>Chutar</button>
        </div>
    )
}