import style from './Menu.module.css';
import { useRouter } from 'next/router';
import Cuenta from './Cuenta';
import Blog from './Blog';
import Consultorio from './Consultorio';

function Menu() {
  const router = useRouter();
  let focus = router.query.focus;
  return (
    <div className={style.Menu}>
      {(focus === 'consultorio' && <Consultorio />) ||
        (focus === 'cuenta' && <Cuenta />) ||
        (focus === 'blog' && <Blog />)}
    </div>
  );
}
export default Menu;
