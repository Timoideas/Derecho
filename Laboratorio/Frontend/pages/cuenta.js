import style from 'styles/pages/Cuenta.module.css';
import Head_Main from 'heads/Main.head';
import { Section, Body, Content } from 'components/Resources/Timoideas';
export default function Cuenta() {
  return (
    <>
      <Head_Main />
      <Body>
        <Section>
          <Content center>
            <h1 className={style.Title}>Cuenta</h1>
          </Content>
        </Section>
      </Body>
    </>
  );
}
