import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from './CuentaNav.module.css';
function CuentaNav() {
  const [NavFocus, setNavFocus] = useState('odontograma');
  useEffect(() => {
    if (localStorage.Cuenta_Nav) setNavFocus(localStorage.Cuenta_Nav);
    return () => {};
  }, []);
  const router = useRouter();
  const handlerNav = (q) => {
    router.push('/?focus=cuenta&nav=' + q, `/cuenta?nav=${q}`, {
      shallow: true,
    });
    localStorage.Cuenta_Nav = q;
    setNavFocus(q);
  };
  return (
    <nav className={style.CuentaNav}>
      <div
        onClick={() => {
          handlerNav('cuenta');
        }}
        className={NavFocus === 'cuenta' && style.Active}
      >
        C
      </div>
      <div
        onClick={() => {
          handlerNav('odontograma');
        }}
        className={NavFocus === 'odontograma' && style.Active}
      >
        O
      </div>
      <span />

      <div
        onClick={() => {
          handlerNav('info');
        }}
        className={NavFocus === 'info' && style.Active}
      >
        I
      </div>
    </nav>
  );
}
export default CuentaNav;
