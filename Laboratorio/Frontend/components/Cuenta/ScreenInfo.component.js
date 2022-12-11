import { Content } from 'components/Resources/Timoideas';
import Profile from './Profile';
import style from './ScreenInfo.module.css';
function ScreenInfo() {
  return (
    <div className={style.ScreenInfo}>
      <Content center flex={1}>
        <Profile />
      </Content>
      <Content center flex={1} row className={style.NumbersContainer}>
        <div className={style.Title}>
          <label>DNI</label>
          <div className={style.Numbers}>61457984</div>
        </div>
        <div className={style.Title}>
          <label>EDAD</label>
          <div className={style.Numbers}>21</div>
        </div>
        <div className={style.Title}>
          <label>GASTOS</label>
          <div className={style.Numbers}>512.50</div>
        </div>
      </Content>
      <Content center flex={1} row className={style.ContactoContainer}>
        <div className={style.Title}>
          <label>Telefono</label>
          <div className={style.Contacto}>966682190</div>
        </div>
        <div className={style.Title}>
          <label>Correo</label>
          <div className={style.Contacto}>fertimo99@gmail.com</div>
        </div>
      </Content>
      <Content center flex={2}>
        <div className={style.Boletas}>
          <label>Boletas</label>
          <div className={style.BoletaContainer}>
            <div className={style.BoletaCard}>n° 1</div>
            <div className={style.BoletaCard}>n° 1</div>
            <div className={style.BoletaCard}>n° 1</div>
          </div>
        </div>
      </Content>
    </div>
  );
}
export default ScreenInfo;
