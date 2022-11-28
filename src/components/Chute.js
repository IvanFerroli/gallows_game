export default function Chute(props) {
    const guess = props.guess
    const setGuess = props.setGuess
	const setGameWon = props.setGameWon
	const setGameLost = props.setGameLost
    const word = props.word


    return(
        <div className="guess-container">
            <div className="guess-span">Já sei a palavra</div>
            <input
            data-test="guess-input"
            disabled={
						props.endGame === true ||
						props.word === null ||
						props.word === "" ||
                        props.word === undefined 
							? true
							: false
					} value={guess} onChange={e => setGuess(e.target.value)}/>
            <button 
            data-test="guess=button"
            className="guess-button" disabled={
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