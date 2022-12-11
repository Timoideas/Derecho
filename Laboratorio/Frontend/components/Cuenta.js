import style from './Cuenta.module.css';
import CuentaNav from './Cuenta/CuentaNav.component';
import ScreenCitas from './Cuenta/ScreenCitas.component';
import ScreenInfo from './Cuenta/ScreenInfo.component';
import ScreenOdontograma from './Cuenta/ScreenOdontograma.component';
import { Content } from './Resources/Timoideas';
function Cuenta() {
  return (
    <div className={style.Cuenta}>
      <Content center flex={1}>
        <CuentaNav />
        <Content center flex={8}>
          {(localStorage.Cuenta_Nav === 'cuenta' && <ScreenCitas />) ||
            (localStorage.Cuenta_Nav === 'odontograma' && (
              <ScreenOdontograma />
            )) ||
            (localStorage.Cuenta_Nav === 'info' && <ScreenInfo />)}
        </Content>
      </Content>
    </div>
  );
}
export default Cuenta;
