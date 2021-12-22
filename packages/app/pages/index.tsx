import { useCallback } from 'react';
import Head from 'next/head';
import { useTheme } from '../context/theme';
import flipCoin from '../util/flip-coin';
import TrailingText from './../components/TrailingText';
import ExternalLink from '../components/ExternalLink';
import * as LINKS from '../config/data';
import styles from './Home.module.scss';

// Inspiration taken from
// https://ionicframework.com/blog/wp-content/uploads/2021/12/ionic-6-feature-image-1.png

const name = 'José Carneiro';

const HomePage = () => {
  const [{ dark, colorful }, changeTheme] = useTheme();

  const changePatterns = useCallback(() => {
    changeTheme({
      ...(flipCoin(2 / 3) && { dark: !dark }),
      ...(flipCoin(2 / 3) && { colorful: !colorful })
    });
  }, [changeTheme, dark, colorful]);

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} />
      </Head>
      <main className={styles.HomePage}>
        <TrailingText
          value={name}
          count={10}
          onPointerEnter={changePatterns}
          onTouchStart={changePatterns}
        />
        <p>
          Hello World! My name is José, but you can call me Zé.
          <br />
          I&apos;m a full-stack developer based in Lisbon, Portugal.
          <br />I work at{' '}
          <ExternalLink to="https://mercedes-benz.io/">
            Mercedes-Benz.io
          </ExternalLink>{' '}
          and teach at{' '}
          <ExternalLink to="https://ironhack.com/">Ironhack</ExternalLink>.
          <br />
          I enjoy building fun experiments using TypeScript, React, Vue.js,
          Three.js, CSS and Node.js.
          <br />
          You can reach out to me at{' '}
          <ExternalLink to={`mailto:${LINKS.EMAIL}`}>
            {LINKS.EMAIL}
          </ExternalLink>{' '}
          and follow me on{' '}
          <ExternalLink to={LINKS.LINKEDIN}>LinkedIn</ExternalLink>,{' '}
          <ExternalLink to={LINKS.GITHUB}>GitHub</ExternalLink>,{' '}
          <ExternalLink to={LINKS.TWITTER}>Twitter</ExternalLink> or{' '}
          <ExternalLink to={LINKS.INSTAGRAM}>Instagram</ExternalLink>.
        </p>
      </main>
    </>
  );
};

export default HomePage;
