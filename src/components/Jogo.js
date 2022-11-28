import React from "react"

export default function Jogo(props){
   
    const gallowStage = props.image

    const words = props.wordBank
    const word = props.word
    const spltWord = word? word.split("") : []
    const underlined = spltWord.map(() => " __ ")

    
    function randomInt(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    
    return(
        <div className="game-container">
            <img src={gallowStage[props.errors]} alt="batata"/>
            <button className="start-button" onClick={() => props.setWord(words[randomInt(0, 187)])}>Escolher palavra</button>
            <span>{underlined}</span>
        </div>
    )
    

         
    
}
