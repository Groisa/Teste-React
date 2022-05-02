import { useState } from "react";
import Border from "./testes/bordesize";
import Calculadora from "./testes/calculadora";

const Inicial = {
  Number1 : '',
  Number2 :'',
  Sinal:'+'
}



function App() {
  return (
    <>
      <Calculadora/>
      <Border/>
    </>
  )
}

export default App;
