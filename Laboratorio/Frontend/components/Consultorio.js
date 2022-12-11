import style from './Consultorio.module.css';
import { Content } from 'components/Resources/Timoideas';
import { useState } from 'react';
import Sintomas from './Consultorio/Sintomas';

function Consultorio() {
  const [PieceActived, setPieceActived] = useState('');
  const [ServiceActived, setServiceActived] = useState('');
  const handlerPiece = (pc) => {
    setPieceActived(pc);
    setServiceActived('Curaciones');
  };
  const [TratamientoBolean, setTratamientoBolean] = useState(false);
  const [Tratamiento, setTratamiento] = useState(
    'M185.431 209C-80.5694 89.8 -3.06935 388.667 68.9306 553C209.431 629.5 548.331 712.3 779.931 431.5C1011.53 150.7 633.097 26.8333 414.931 0C430.931 79.8333 407.431 233.4 185.431 209Z'
  );
  const handlerTratamiento = () => {
    setTratamiento(
      TratamientoBolean
        ? 'M185.431 209C-80.5694 89.8 -3.06935 388.667 68.9306 553C209.431 629.5 548.331 712.3 779.931 431.5C1011.53 150.7 633.097 26.8333 414.931 0C430.931 79.8333 407.431 233.4 185.431 209Z'
        : 'M65.5002 209C-136.5 457 192.5 515.666 264.5 680C405 756.5 955.667 693.33 788.5 370C629 61.4998 387.5 -108 328.931 78.9998C344.931 158.833 223.5 68.4997 65.5002 209Z'
    );
    setTratamientoBolean(!TratamientoBolean);
  };
  return (
    <Content bg center flex={1}>
      <svg
        className={style.SvgHeader}
        width='594'
        height='452'
        viewBox='0 0 594 452'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 123C12 49 4 10.1667 0 0H593.5C589.333 21.8333 581.2 78.8 582 132C583 198.5 507.5 355 297 452C96 355.5 12 215.5 12 123Z'
          fill='#FFB800'
        />
      </svg>
      <div className={style.ContainerSecundary}>
        <svg
          className={style.SvgRigth}
          viewBox='0 0 1036 720'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 0H1036.5V719C932 706 858 628 794 574.5C742.8 531.7 444 472.333 301 448C87.4 315.6 12 94.1667 1 0Z'
            fill='#00010D'
            fill-opacity='0.6'
            stroke='black'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>
      <div className={style.ContainerSecundary}>
        <svg
          className={style.SvgLeft}
          viewBox='0 0 1037 720'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1036 0H0.5V719C105 706 179 628 243 574.5C294.2 531.7 593 472.333 736 448C949.6 315.6 1025 94.1667 1036 0Z'
            fill='#100526'
            fill-opacity='0.6'
            stroke='#392D2D'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>
      <div className={style.Tratamiento}>
        <svg
          className={style.SvgFooter}
          viewBox='0 0 1440 448'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={handlerTratamiento}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d={Tratamiento}
            fill='#3921aa'
            fill-opacity='1'
          />
        </svg>
      </div>

      {/* <Content
        bg
        center
        flex={1}
        className={ServiceActived === 'Curaciones' ? style.Actived : ''}
        row
      >
        <Content bg center flex={1}>
          Curaciones
          {ServiceActived && (
            <button
              onClick={() => {
                setServiceActived('');
              }}
            >{`Volver <-`}</button>
          )}
          <button
            onClick={() => {
              handlerPiece('1-1');
            }}
            className={PieceActived === '1-1' && style.PieceActived}
          >
            1-1
          </button>
          <button>1-2</button>
          <button>1-3</button>
          <button>1-4</button>
        </Content>
        <Content bg center flex={1}>
          <h2>Consultorio</h2>
          <p>Que necesita? nosotros estamos listos para atenderle</p>
          {PieceActived && (
            <div>
              <p>Qué siente?</p>
              <Sintomas piece={'1-1'} />
            </div>
          )}
        </Content>
      </Content>
      <Content bg center flex={1}>
        <Content bg center flex={1} row>
          <Content
            bg
            center
            flex={1}
            className={ServiceActived === 'Blanqueamiento' ? style.Actived : ''}
          >
            {ServiceActived && (
              <button
                onClick={() => {
                  setServiceActived('');
                }}
              >{`Volver <-`}</button>
            )}
            <button
              onClick={() => {
                setServiceActived('Blanqueamiento');
              }}
            >
              Blanqueamineto
            </button>
          </Content>
          <Content bg center flex={1}>
            <Content
              center
              flex={3}
              className={ServiceActived === 'Brackets' ? style.Actived : ''}
            >
              {ServiceActived && (
                <button
                  onClick={() => {
                    setServiceActived('');
                  }}
                >{`Volver <-`}</button>
              )}
              <button
                onClick={() => {
                  setServiceActived('Brackets');
                }}
              >
                Brackets
              </button>
            </Content>
            <Content bg center flex={1}>
              Quienes somos?
            </Content>
          </Content>
        </Content>
      </Content> */}
    </Content>
  );
}
export default Consultorio;
