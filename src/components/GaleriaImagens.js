import { useState } from "react";
import '../styles/galeria.css';

const GaleriaDeImagens = () => {
    const [imagemAmpliada, setImagemAmpliada] = useState(null);
  
    const handleClick = (url) => {
      setImagemAmpliada(url);
    };
  
    const handleClose = () => {
      setImagemAmpliada(null);
    };

    const urls = [
        'https://th.bing.com/th/id/OIP.K9sKHdMuLucob1uD8ULfsgHaFk?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.IRtQ9PwXiOG0TxLR_qnpRgHaE6?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.avIDOMLFQjYI9G2LTabshQHaEL?rs=1&pid=ImgDetMain'
      ];

    return (
        <div>
          <div className="miniaturas">
            {urls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Imagem ${index + 1}`}
                className="miniatura"
                onClick={() => handleClick(url)}
              />
            ))}
          </div>
          {imagemAmpliada && (
            <div className="modal" onClick={handleClose}>
              <img src={imagemAmpliada} alt="Imagem Ampliada" className="ampliada" />
            </div>
          )}
        </div>
      );
    };
    
export default GaleriaDeImagens;
