import Theme from '../styles/theme';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aun Abdi</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 