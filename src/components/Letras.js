export default function Letras(props) {

const letras = props.letra
const selected = props.selected
const setSelected = props.setSelected

function selectedLetters(selectedLetter) {
    if (!selected.includes(selectedLetter)) {
        setSelected([...selected, selectedLetter]);
      }
    }

    return(
        <div className="letter-container">
                {letras.map((letra, index) => (<button disabled={(props.word === null || props.word === "" || !selected.includes(letra))? false : true} onClick={() => {selectedLetters(letra)}} key={index}>{letra}</button>))}
        </div>
    )
}