export default function Letras(props) {

const letras = props.letra
    return(
        <div className="letter-container">
                {letras.map((letra, index) => (<button key={index}>{letra}</button>))}
        </div>
    )
}