import { useState } from "react";
import '../App.css';

export function CalculadoraSomatorio() {
    const [numero1, setNumero1] = useState(null)
    const [numero2, setNumero2] = useState(null)
    const [soma, setSoma] = useState(null)

    const calcularSoma = () => {
        setSoma(parseFloat(numero1) + parseFloat(numero2))
    }

    const handleNumero1 = (e) => {
        setNumero1(e.target.value)
    }

    const handleNumero2 = (e) => {
        setNumero2(e.target.value)
    }

    return (
        <>
            <h1>Calculadora de Somátorio</h1>
            <div>
                <label>Digite o primeiro número:</label>
                <input type="number" value={numero1} onChange={handleNumero1} />
            </div>

            <div>
                <label>Digite o segundo número</label>
                <input type="number" value={numero2} onChange={handleNumero2} />
            </div>
            <p><button className="botaoSoma" text="Calcular Soma" onClick={calcularSoma}>{ "Calcular Soma" }</button></p>
            {soma !== null && (
                <p>A soma dos números é: {soma}</p>
            )}
        </>
    )
}