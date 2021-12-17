import TrailingText from './../components/TrailingText';
import Head from 'next/head';
import SOCIAL_LINKS from '../config/data';
import ExternalLink from '../components/anchor';
import styles from './Home.module.scss';
import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';

// Inspiration taken from
// https://ionicframework.com/blog/wp-content/uploads/2021/12/ionic-6-feature-image-1.png

const name = 'José Carneiro';
// const name = 'Hello World';

const HomePage = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [colorful, setColorful] = useState(false);

  const classes = useMemo(
    () => [darkTheme && styles.dark, colorful && styles.colorful],
    [darkTheme, colorful]
  );
  const changePatterns = useCallback(() => {
    if (Math.random() > 0.5) setDarkTheme(!darkTheme);
    if (Math.random() > 0.5) setColorful(!colorful);
  }, [setDarkTheme, colorful]);

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
            <ExternalLink to={`mailto:${SOCIAL_LINKS.email}`}>
              {SOCIAL_LINKS.email}
            </ExternalLink>{' '}
            and follow me on{' '}
            <ExternalLink to={SOCIAL_LINKS.linkedIn}>LinkedIn</ExternalLink>,{' '}
            <ExternalLink to={SOCIAL_LINKS.gitHub}>GitHub</ExternalLink>,{' '}
            <ExternalLink to={SOCIAL_LINKS.twitter}>Twitter</ExternalLink> or{' '}
            <ExternalLink to={SOCIAL_LINKS.instagram}>Instagram</ExternalLink>.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
