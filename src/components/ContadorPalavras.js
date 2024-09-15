import { useState }  from 'react';

function ContadorDeCaracteres() {
    const [texto, setTexto] = useState('')

    const handleTextoCount = (e) => {
        setTexto(e.target.value)
    }

    return (
        <>
            <h1>Contador de Caracteres</h1>
            <textarea value={texto} onChange={handleTextoCount} placeholder="Digite seu texto aqui" />
            <p>Número de caracteres: {texto.length}</p>
        </>
    )
}
  
export default ContadorDeCaracteres

