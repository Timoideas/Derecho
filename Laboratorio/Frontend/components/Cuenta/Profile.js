import { Content } from 'components/Resources/Timoideas';
import style from './Profile.module.css';
function Profile() {
  return (
    <div className={style.Profile}>
      <Content center flex={1} row>
        <Content center flex={1}>
          <div className={style.Foto}></div>
        </Content>
        <Content center flex={4} className={style.Datos}>
          <div>Fernando Timo</div>
          <div>@fernandotimo</div>
        </Content>
      </Content>
    </div>
  );
}
export default Profile;
