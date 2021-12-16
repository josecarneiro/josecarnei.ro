import TrailingText from './../components/TrailingText';
import Head from 'next/head';
import SOCIAL_LINKS from '../config/data';
import ExternalLink from '../components/anchor';
import styles from './Home.module.scss';

// Inspiration taken from
// https://ionicframework.com/blog/wp-content/uploads/2021/12/ionic-6-feature-image-1.png

const name = 'José Carneiro';

const HomePage = () => (
  <>
    <Head>
      <title>{name}</title>
      <meta name="description" content={name} />
    </Head>
    <div className={styles.App}>
      <div className={styles.Content}>
        <TrailingText value={name} count={10} />
        <p>
          Hello World! My name is José, you can call me Zé.
          <br />
          I'm a full-stack developer based in Lisbon, Portugal.
          <br />I work at{' '}
          <ExternalLink to="https://mercedes-benz.io/">
            Mercedes-Benz.io
          </ExternalLink>{' '}
          and teach at{' '}
          <ExternalLink to="https://ironhack.com/">Ironhack</ExternalLink>.
          <br />
          I enjoy building fun experiments using TypeScript, React.js, Three.js,
          CSS and Node.js.
          <br />
          Reach out to me at{' '}
          <ExternalLink to={`mailto:${SOCIAL_LINKS.email}`}>
            {SOCIAL_LINKS.email}
          </ExternalLink>
          .
          <br />
          Follow me on{' '}
          <ExternalLink to={SOCIAL_LINKS.linkedIn}>LinkedIn</ExternalLink>,{' '}
          <ExternalLink to={SOCIAL_LINKS.gitHub}>GitHub</ExternalLink>,{' '}
          <ExternalLink to={SOCIAL_LINKS.twitter}>Twitter</ExternalLink> or{' '}
          <ExternalLink to={SOCIAL_LINKS.instagram}>Instagram</ExternalLink>.
        </p>
      </div>
    </div>
  </>
);

export default HomePage;
