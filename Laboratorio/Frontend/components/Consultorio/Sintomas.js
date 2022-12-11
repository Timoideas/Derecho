import { useState } from 'react';
import style from './Sintomas.module.css';
function Sintomas({ piece }) {
  const [Sintomas, setSintomas] = useState('');
  return (
    <div className={style.Sintomas}>
      <h2>Sintomas {piece}</h2>
      {!Sintomas && (
        <div>
          <button
            onClick={() => {
              setSintomas('Dolor al Frio');
            }}
          >
            Dolor al Frio
          </button>
          <button
            onClick={() => {
              setSintomas('Dolor al Calor');
            }}
          >
            Dolor al Calor
          </button>
          <button
            onClick={() => {
              setSintomas('Dolor al Golpe');
            }}
          >
            Dolor al Golpe
          </button>
        </div>
      )}
      {Sintomas && (
        <div>
          <div>{Sintomas}</div>
          <div>Primera vez</div>
          <div>Nunca fue tratado</div>
          <div>97% Endodoncia</div>
          <p>Corona de porcelana</p>
          <p>Costo S/.250</p>
          <p>Consultorios disponibles ahora en Arequipa</p>
          <button>Separar Cita</button>
        </div>
      )}
    </div>
  );
}
export default Sintomas;
