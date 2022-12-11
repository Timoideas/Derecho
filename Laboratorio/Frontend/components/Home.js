import style from './Home.module.css';
import { Header } from 'components/Resources/Timoideas';
function Home() {
  return (
    <Header height={10}>
      <div className={style.Home}>
        <h2>Laboratorio</h2>
      </div>
    </Header>
  );
}
export default Home;
