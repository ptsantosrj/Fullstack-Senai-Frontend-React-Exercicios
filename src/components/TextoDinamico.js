import React, { useState } from 'react';

export function TextDynamic () {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <h1>Bem vindo</h1>
            <h2>Escreva seu texto aqui</h2>
            <input 
                type="text"
                placeholder="Digite o conteudo"
                value={text}
                onChange={handleChange}   
            /> 
            <p>
                <h2>{text}</h2>
            </p>
        </div>
    );

}

export default TextDynamic