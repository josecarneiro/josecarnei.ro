import { FunctionComponent } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.scss';
import { ThemeProvider } from '../context/theme';
import PageWrapper from '../components/PageWrapper';

// const FONT_BEHAVIOR = 'optional';
const FONT_BEHAVIOR = 'swap';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>José Carneiro</title>
      <meta name="description" content="José Carneiro" />
      <meta name="robots" content="index,follow,noodp" />
      <meta name="googlebot" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="theme-color"
        content="<%= htmlWebpackPlugin.options.data.meta.pwa.themeColor %>"
      />
    </Head>
    <ThemeProvider>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  </>
);

export default App;
