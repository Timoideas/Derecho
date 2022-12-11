import { Content, Grid, Scroll } from 'components/Resources/Timoideas';
import { useState } from 'react';
import Profile from './Profile';
import style from './ScreenCitas.module.css';

function ScreenCitas() {
  const [Citas, setCitas] = useState(false);

  return (
    <div className={style.ScreenCitas}>
      <Content center flex={1}>
        <div>Citas Pasadas</div>
        <Content center flex={1}>
          <Scroll x center gap={1}>
            <div className={style.CitaCard}>
              <div className={style.CitaDetalles}>
                <div className={style.Fecha}>24 JUN</div>
                <div className={style.Doctor}>Doctor: Manuel</div>
                <div className={style.Doctor}>Pieza: 1-1</div>
                <div className={style.Doctor}>Hora: 13:10</div>
                <div className={style.Doctor}>Lugar: Av Jesus 1420</div>
              </div>
              <div className={style.Medicacion}>
                <div className={style.Medicina}>Medicinas</div>
                <div className={style.Medicina}>
                  <div className={style.MedicinaCard}>
                    <div>Nombre de Medicina</div>
                    <div>L M V</div>
                    <div>Hora: 8:30 | 9:45</div>
                  </div>
                </div>
                <div className={style.Medicina}>Costo total</div>
              </div>
            </div>
          </Scroll>
        </Content>
        <div>Citas Pendientes</div>

        <Content center flex={1}>
          <Scroll x center>
            <div className={style.CitaCard}>
              <div className={style.CitaDetalles}>
                <div className={style.Fecha}>24 JUN</div>
                <div className={style.Doctor}>Doctor: Manuel</div>
                <div className={style.Doctor}>Pieza: 1-1</div>
                <div className={style.Doctor}>Hora: 13:10</div>
                <div className={style.Doctor}>Lugar: Av Jesus 1420</div>
              </div>
              <div className={style.Medicacion}>
                <div className={style.Medicina}>Medicinas</div>
                <div className={style.Medicina}>
                  <div className={style.MedicinaCard}>
                    <div>Nombre de Medicina</div>
                    <div>L M V</div>
                    <div>Hora: 8:30 | 9:45</div>
                  </div>
                </div>
                <div className={style.Medicina}>Costo total</div>
              </div>
            </div>
          </Scroll>
        </Content>
      </Content>
    </div>
  );
}
export default ScreenCitas;
