
import React, { useState } from 'react';
import '../App.css';


const PerfilUsuario = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [foto, setFoto] = useState('');

  const handleNomeChange = (e) => setNome(e.target.value);
  
  const handleIdadeChange = (e) => setIdade(e.target.value);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="perfil-container">
      <h2>Insira as informações do usuário</h2>
      <input 
        type="text" 
        placeholder="Nome" 
        value={nome} 
        onChange={handleNomeChange} 
        className="input" 
      />
      <input 
        type="number" 
        placeholder="Idade" 
        value={idade} 
        onChange={handleIdadeChange} 
        className="input" 
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFotoChange} 
        className="input-file" 
      />

      {nome && idade && foto && (
        <div className="perfil-info">
          <img src={foto} alt={`Foto de ${nome}`} className="perfil-foto" />
          <h2>{nome}</h2>
          <p>Idade: {idade} anos</p>
        </div>
      )}
    </div>
  );
};

export default PerfilUsuario;