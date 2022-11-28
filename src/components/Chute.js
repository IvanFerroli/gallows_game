export default function Chute(props) {
    const guess = props.guess
    const setGuess = props.setGuess
	const setGameWon = props.setGameWon
	const setGameLost = props.setGameLost
    const word = props.word


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