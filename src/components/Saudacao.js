import React, { useState } from 'react';

function Saudacao () {
    const [nome, setNome] = useState('');

    const handleSaudacao = (e) => {
        setNome(e.target.value)
    }

    return (
        <div>
            <h1>Bem vindo</h1>
            <h2>Digite seu Nome</h2>
            <input 
                type="text"
                placeholder="Digite o nome desejado"
                value={nome}
                onChange={handleSaudacao}   
            /> 
            <p>
                {nome && <h2>Olá, {nome}</h2> }
            </p>
        </div>
    );

}

export default Saudacao