import { FunctionComponent } from 'react';
import Head from 'next/head';
import Anchor from '../components/anchor';
import socialLinks from '../config/social';

const HomePage: FunctionComponent = () => (
  <>
    <Head>
      <title>José Carneiro</title>
      <meta name="description" content="José Carneiro" />
    </Head>
    <section className="full-height">
      <div className="container">
        <h1>José Carneiro</h1>
        <h2>
          Senior Front-end Developer at{' '}
          <Anchor url="https://mercedes-benz.io" value="Mercedes-Benz.io" /> /
          Lead Instructor at{' '}
          <Anchor url="https://ironhack.com" value="Ironhack" />
        </h2>
        <ul>
          {socialLinks.map(({ name, url }) => (
            <li key={url}>
              <Anchor url={url} value={name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default HomePage;
