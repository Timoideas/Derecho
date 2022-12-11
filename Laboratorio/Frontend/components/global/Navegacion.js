import { useState } from 'react';
import style from './Navegacion.module.css';
import { Footer, Poligon } from 'components/Resources/Timoideas';
import { useRouter } from 'next/router';
function Navegacion() {
  const router = useRouter();
  const [A, setA] = useState(style.Left);
  const [B, setB] = useState(style.Mid);
  const [C, setC] = useState(style.Rigth);
  return (
    <Footer height={10}>
      <div className={style.Navegacion}>
        <div
          onClick={() => {
            if (A !== style.Mid) {
              B === style.Mid && setB(A);
              C === style.Mid && setC(A);
              setA(style.Mid);
            }
            router.push('/?focus=consultorio', '/consultorio', {
              shallow: true,
            });
          }}
          className={A}
        >
          <Poligon sides={8} bg={'var(--c20)'} className={style.Poligono}>
            C
          </Poligon>
        </div>
        <div
          onClick={() => {
            if (B !== style.Mid) {
              A === style.Mid && setA(B);
              C === style.Mid && setC(B);
              setB(style.Mid);
            }
            router.push('/?focus=blog', '/blog', { shallow: true });
          }}
          className={B}
        >
          <Poligon sides={8} bg={'var(--c20)'} className={style.Poligono}>
            B
          </Poligon>
        </div>
        <div
          onClick={() => {
            if (C !== style.Mid) {
              A === style.Mid && setA(C);
              B === style.Mid && setB(C);
              setC(style.Mid);
            }
            router.push('/?focus=cuenta', '/cuenta', { shallow: true });
          }}
          className={C}
        >
          <Poligon sides={8} bg={'var(--c20)'} className={style.Poligono}>
            A
          </Poligon>
        </div>
      </div>
    </Footer>
  );
}
export default Navegacion;
