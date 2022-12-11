import style from 'styles/pages/Consultorio.module.css';
import Head_Main from 'heads/Main.head';
import { Section, Body, Content } from 'components/Resources/Timoideas';
import { useState } from 'react';
export default function Consultorio() {
  const [Animate, setAnimate] = useState(false);
  const [State, setState] = useState(
    'M185.431 209C-80.5694 89.8 -3.06935 388.667 68.9306 553C209.431 629.5 548.331 712.3 779.931 431.5C1011.53 150.7 633.097 26.8333 414.931 0C430.931 79.8333 407.431 233.4 185.431 209Z'
  );
  const handlerFunction = () => {
    setState(
      Animate
        ? 'M185.431 209C-80.5694 89.8 -3.06935 388.667 68.9306 553C209.431 629.5 548.331 712.3 779.931 431.5C1011.53 150.7 633.097 26.8333 414.931 0C430.931 79.8333 407.431 233.4 185.431 209Z'
        : 'M65.5002 209C-136.5 457 192.5 515.666 264.5 680C405 756.5 955.667 693.33 788.5 370C629 61.4998 387.5 -108 328.931 78.9998C344.931 158.833 223.5 68.4997 65.5002 209Z'
    );
    setAnimate(!Animate);
  };
  return (
    <>
      <Head_Main />
      <Body>
        <Section>
          <Content center>
            <div className={style.Content}>
              <svg
                viewBox='0 0 853 710'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onClick={handlerFunction}
              >
                <path d={State} fill='#C4C4C4' />
              </svg>
            </div>
            <button onClick={handlerFunction}>Animate</button>
          </Content>
        </Section>
      </Body>
    </>
  );
}
