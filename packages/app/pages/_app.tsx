import Head from 'next/head';
import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import '../styles/base.scss';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>José Carneiro</title>
      {/* <meta charset="utf-8" /> */}
      <meta name="description" content="José Carneiro" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=5"
      />
      <meta name="robots" content="index,follow,noodp" />
      <meta name="googlebot" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="theme-color"
        content="<%= htmlWebpackPlugin.options.data.meta.pwa.themeColor %>"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
