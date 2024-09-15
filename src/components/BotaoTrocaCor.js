import React, { useState } from 'react';
import '../App.css';

const BotaoTrocaCor = () => {
    const [isCor1, setIsCor1] = useState(true);

    const trocarCor = () => {
      setIsCor1(!isCor1);
    };
  
    const classeCor = isCor1 ? 'cor1' : 'cor2';
    
  
    return (
      <div className={`botao-troca-cor ${classeCor}`} onClick={trocarCor}>
        Clique para trocar a cor do botao
      </div>
    );
  };
  
export default BotaoTrocaCor;