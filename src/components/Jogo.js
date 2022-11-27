import React from "react"

export default function Jogo(props){
    const gallowStage = props.image
    const [stage1, stage2, stage3, stage4, stage5, stage6] = props.image
    const words = props.word

    const [word, setWord] = React.useState()
    
    function randomInt(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      
    
    return(
        <div className="game-container">
            <img src={stage1}/>
            <button className="start-button" onClick={() => setWord(words[randomInt(0, 187)])}>Escolher palavra</button>
            <span>{word}</span>
        </div>
    )
    

         
    
}
