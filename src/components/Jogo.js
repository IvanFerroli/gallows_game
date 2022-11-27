export default function Jogo(props){
    const gallowStage = props.image
    const [stage1, stage2, stage3, stage4, stage5, stage6] = props.image
    console.log(props.word)
    return(
        <div className="game-container">
            <img src={stage1}/>
            <button className="start-button">Escolher palavra</button>
            <span>{props.word[2]}</span>
        </div>
    )
}