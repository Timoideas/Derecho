import style from 'styles/pages/Index.module.css';
import Head_Main from 'heads/Main.head';
import { Body, Content } from 'components/Resources/Timoideas';
import Menu from 'components/Menu';
import { GET_Fetcher } from 'libraries/fetch/Index.fetch';
import useSWR from 'swr';

export default function Index() {
  const { data, error } = useSWR('/', GET_Fetcher);
  if (error) console.log('error');
  if (!data) console.log('loading');
  if (data) console.log(data);

  return (
    <>
      <Head_Main />
      <Body>
        <Content>
          <Menu />
        </Content>
      </Body>
    </>
  );
}
