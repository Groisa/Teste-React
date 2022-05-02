import { useState } from "react";

const Inicial = {
    Number1: '',
    Number2: '',
    Sinal: '+'
}

function Calculadora() {
    const [dados, setDados] = useState(Inicial)
    const dividir = () => parseFloat(dados.Number1) / parseFloat(dados.Number2)
    const soma = () => parseFloat(dados.Number1) + parseFloat(dados.Number2)
    const subtrair = () => parseFloat(dados.Number1) - parseFloat(dados.Number2)
    const multiplicar = () => parseFloat(dados.Number1) * parseFloat(dados.Number2)
    const [demoResul, setDemoResul] = useState('')
    let resultado = (event) => {
        if (dados.Sinal === '+') {
            setDemoResul(soma())
        } else if (dados.Sinal === '/') {
            setDemoResul(dividir())
        } else if (dados.Sinal === '-') {
            setDemoResul(subtrair())
        } else if (dados.Sinal === '*') {
            setDemoResul(multiplicar())
        }

    }
    const Envio = (event) => {
        setDados({
            ...dados,
            [event.target.name]: event.target.value
        })
    }
    return (
        <form className="Div" >
            <input
                placeholder="Insira o primeiro numero  "
                type='number'
                value={dados.Number1}
                name="Number1"
                onChange={Envio} />
            <select value={dados.Sinal} onChange={Envio} name='Sinal'>
                <option value='+'>+</option>
                <option value='-'> - </option>
                <option value='/'> / </option>
                <option value='*'> * </option>
            </select>
            <input
                placeholder="Insira o segundo numero "
                type='number'
                value={dados.Number2}
                name='Number2'
                onChange={Envio} />
            <button type="button" onClick={resultado} > Calcular </button>
            <input
                placeholder="resultado"
                value={demoResul}
                onChange={Envio} />
        </form>
    );
}
export default Calculadora