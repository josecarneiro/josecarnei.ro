import { useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useTheme } from '../context/theme';
import flipCoin from '../util/flip-coin';
import TrailingText from './../components/TrailingText';
import ExternalLink from '../components/ExternalLink';
import { NAME } from '../constants';
import * as LINKS from '../constants';
import styles from './Home.module.scss';

import type { FunctionComponent } from 'react';
import type { NextPage } from 'next';

// Inspiration taken from
// https://ionicframework.com/blog/wp-content/uploads/2021/12/ionic-6-feature-image-1.png

const NAME_TRAIL_COUNT = 10;

const HeroText: FunctionComponent = () => (
  <>
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
      and follow me on <ExternalLink to={LINKS.LINKEDIN}>LinkedIn</ExternalLink>
      , <ExternalLink to={LINKS.GITHUB}>GitHub</ExternalLink>,{' '}
      <ExternalLink to={LINKS.TWITTER}>Twitter</ExternalLink> or{' '}
      <ExternalLink to={LINKS.INSTAGRAM}>Instagram</ExternalLink>.
    </p>
  </>
);

// const HomePageOverlayNavigation: FunctionComponent = () => (
//   <nav className={styles.HomePageOverlayNavigation}>
//     <aside>
//       <Link href="/writing">Writing</Link>
//       <Link href="/work">Work</Link>
//     </aside>
//     <aside>
//       <a href="https://github.com">GitHub</a>
//       <a href="https://github.com">Twitter</a>
//     </aside>
//   </nav>
// );

const HomePage: NextPage = () => {
  const [{ dark, colorful }, changeTheme] = useTheme();

  const changePatterns = useCallback(() => {
    changeTheme({
      ...(flipCoin() ? { dark: !dark } : { colorful: !colorful })
    });
  }, [changeTheme, dark, colorful]);

  return (
    <>
      <Head>
        <title>{NAME}</title>
        <meta name="description" content={NAME} />
      </Head>
      <main className={styles.HomePage}>
        {/* <HomePageOverlayNavigation /> */}
        <TrailingText
          value={NAME}
          count={NAME_TRAIL_COUNT}
          onPointerEnter={changePatterns}
          onTouchStart={changePatterns}
        />
        <HeroText />
      </main>
    </>
  );
};

export default HomePage;
