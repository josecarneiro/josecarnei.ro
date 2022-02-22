import '../styles/global.scss';

const CustomApp = ({ Component, pageProps }) => (
  <main>
    <Component {...pageProps} />
  </main>
);

export default CustomApp;
