import React, { useState } from 'react'

export function ToggleComponent() {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Esconder Componente' : 'Mostrar Componente'}
        </button>
        {isVisible && <div>Não estou mais sumido!</div>}
      </div>
    );
  }
  
  export default ToggleComponent;