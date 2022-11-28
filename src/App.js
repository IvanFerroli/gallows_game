import React from "react"
import Chute from "./components/Chute"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"
import alfabeto from "./alfabeto"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

const gallowStages = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]


function App() {
  const [errors, setErrors] = React.useState(0)
  const [word, setWord] = React.useState()
  const [selected, setSelected] = React.useState([])
  return (
    <>
      <Jogo image={gallowStages} word={word} setWord={setWord} wordBank={palavras} errors={errors} setErrors={setErrors} img={`forca${errors}`}/>
      <Letras letra={alfabeto} word={word} selected={selected} setSelected={setSelected}/>
      <Chute word={word}/>
    </>
  );
}

export default App;
