export default function Letras(props) {
	const letras = props.letra;
	const selected = props.selected;
	const setSelected = props.setSelected;
	const displayedWord = props.displayedWord;
	const setErrors = props.setErrors;
	const errors = props.errors;
	const setDisplayedWord = props.setDisplayedWord;
	const word = props.word;
	const spltWord = word ? word.split("") : [];
	const underlined = spltWord.map(() => "_ ");
	const endGame = props.endGame;
	
	console.log(underlined)

	function selectedLetters(selectedLetter) {
		
		if (!selected.includes(selectedLetter)) {
			selected.push(selectedLetter);
			if(spltWord.includes(selectedLetter)){
				// debugger;
				for (let i = 0; i < selected.length; i++) {
					spltWord.forEach(function(item, index) { if (item === selected[i]) underlined[index] = selected[i];});
				}
				
				const displayed = underlined;
				setDisplayedWord(displayed)	
			}else{
				setErrors( errors + 1)
			}
		}
	}


	return (
		<div className="letter-container">
			{letras.map((letra, index) => (
				<button
					disabled={
						props.endGame === true ||
						props.word === null ||
						props.word === "" ||
                        props.word === undefined ||
						selected.includes(letra)
							? true
							: false
					}
					className={`letter ${!selected.includes(letra)? "unselected" : "selected"}`}
					onClick={() => {
						selectedLetters(letra);
					}}
					key={index}
				>
					{letra}
				</button>
			))}
		</div>
	);
}
