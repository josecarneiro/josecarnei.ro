import TrailingText from './../components/TrailingText';
import Head from 'next/head';
import * as SOCIAL_LINKS from '../config/data';
import ExternalLink from '../components/ExternalLink';
import styles from './Home.module.scss';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import useToggle from '../hooks/use-toggle';
import flipCoin from '../util/flip-coin';

// Inspiration taken from
// https://ionicframework.com/blog/wp-content/uploads/2021/12/ionic-6-feature-image-1.png

const name = 'José Carneiro';
// const name = 'Hello World';

const HomePage = () => {
  const [darkTheme, toggleDarkTheme] = useToggle();
  const [colorful, toggleColorful] = useToggle();

  const classes = useMemo(
    () => [darkTheme && styles.dark, colorful && styles.colorful],
    [darkTheme, colorful]
  );
  const changePatterns = useCallback(() => {
    if (flipCoin()) toggleDarkTheme();
    if (flipCoin()) toggleColorful();
  }, [toggleDarkTheme, toggleColorful]);

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} />
      </Head>
      <div className={classNames(styles.App, classes)}>
        <div className="content">
          <TrailingText
            value={name}
            count={10}
            onPointerEnter={changePatterns}
            onTouchStart={changePatterns}
          />
          <p>
            Hello World! My name is José, but you can call me Zé.
            <br />
            I'm a full-stack developer based in Lisbon, Portugal.
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
            <ExternalLink to={`mailto:${SOCIAL_LINKS.EMAIL}`}>
              {SOCIAL_LINKS.EMAIL}
            </ExternalLink>{' '}
            and follow me on{' '}
            <ExternalLink to={SOCIAL_LINKS.LINKEDIN}>LinkedIn</ExternalLink>,{' '}
            <ExternalLink to={SOCIAL_LINKS.GITHUB}>GitHub</ExternalLink>,{' '}
            <ExternalLink to={SOCIAL_LINKS.TWITTER}>Twitter</ExternalLink> or{' '}
            <ExternalLink to={SOCIAL_LINKS.INSTAGRAM}>Instagram</ExternalLink>.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
