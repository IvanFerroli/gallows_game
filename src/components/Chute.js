export default function Chute(props) {
    return(
        <div className="guess-container">
            <input placeholder="chute" disabled={props.word? false : true}></input>
            <button disabled={props.word? false : true}>Chutar</button>
        </div>
    )
}