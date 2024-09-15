import React, { useState } from 'react';
import '../App.css';

export function Contador () {
    const [contador, setContador] = useState(0);

    const aumentar = () => {
        setContador(contador + 1);
    };

    const diminuir = () => {
        setContador(contador - 1);
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    );

}

export default Contador