import Head from 'next/head';
export default function Head_Main() {
  return (
    <Head>
      <link rel='icon' href='icons/favicon.ico' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='mobile-web-app-capable' content='yes'></meta>
      <title>Laboratorio Dental</title>
      <meta
        name='description'
        content='En este video aprenderas sobre como debemos realizar correctamente un blanqueamiento de dientes.'
      />
      <meta property='og:image' content='images/Banner.png'></meta>
    </Head>
  );
}
