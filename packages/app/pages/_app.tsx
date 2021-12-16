import { FunctionComponent } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.scss';

// const FONT_BEHAVIOR = 'optional';
const FONT_BEHAVIOR = 'swap';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>José Carneiro</title>
      <meta name="description" content="José Carneiro" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow,noodp" />
      <meta name="googlebot" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="theme-color"
        content="<%= htmlWebpackPlugin.options.data.meta.pwa.themeColor %>"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=${FONT_BEHAVIOR}`}
      ></link>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
