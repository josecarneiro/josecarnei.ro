import Head from 'next/head';
import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import '../styles/main.scss';

const TITLE = 'jose-carneiro-curriculum-vitae';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{TITLE}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Roboto+Mono:400,700|Source+Code+Pro:400,700"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
