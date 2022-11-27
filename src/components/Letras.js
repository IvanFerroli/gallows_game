export default function Letras(props) {
console.log(props)
const letras = props.letra
    return(
        <div className="letter-container">
                {letras.map((letra, index) => (<button key={index}>{letra}</button>))}
        </div>
    )
}