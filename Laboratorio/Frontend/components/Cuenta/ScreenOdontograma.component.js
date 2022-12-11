import { Content } from 'components/Resources/Timoideas';
import { useState } from 'react';
import style from './ScreenOdontograma.module.css';
function ScreenOdontograma() {
  const [ModalPiece, setModalPiece] = useState('0');
  return (
    <div className={style.ScreenOdontograma}>
      <Content center flex={5}>
        <div>Odontograma</div>
        <div className={style.Dentadura}>
          <div className={style.Superior}>
            <div className={style.PieceContainer}>
              <div
                className={`${style.Piece} ${
                  ModalPiece === 2 && style.PieceActivedContiner
                }`}
                onClick={() => {
                  setModalPiece(ModalPiece === 2 ? '0' : 2);
                }}
              >
                <div>1-1</div>
                <div
                  className={style.Info}
                  style={{
                    width: ModalPiece === 2 ? '100%' : '0',
                    flex: ModalPiece === 2 ? '1' : '0',
                    opacity: ModalPiece === 2 ? '1' : '0',
                  }}
                >
                  <div>Porcenteje de Tratamiento</div>
                  <div>Costo Total</div>
                  <div>Tratamiento</div>
                  <div>Medicación</div>
                  <div>Citas Pendientes</div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.Inferior}></div>
        </div>
        <button>Compartir en Facebook</button>
        <button>Descargar en PDF</button>
      </Content>
    </div>
  );
}
export default ScreenOdontograma;
