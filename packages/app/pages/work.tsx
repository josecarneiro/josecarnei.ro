import Head from 'next/head';
import styles from './Work.module.scss';
import gridStyles from './../styles/Grid.module.scss';

import type { NextPage } from 'next';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>{'WORK'}</title>
      <meta name="description" content={'WORK'} />
    </Head>
    <main className={styles.WorkPage}>
      <h2>Work</h2>
      <div className="row">
        <div className={gridStyles.Col}>
          <h3>Mercedes-Benz.io</h3>
          <h4>Senior Front-End Developer</h4>
          <p>Building financing applications with Vue.js, TypeScript.</p>
        </div>
        <div className={gridStyles.Col}>
          <h3>Ironhack</h3>
          <h4>Lead Instructor</h4>
          <p>Instructed the Web Development Bootcamp </p>
        </div>
        <div className={gridStyles.Col}>
          <h3>iindie</h3>
          <h4>Founder</h4>
          <p>
            Built ecommerce product using Vue.js, Node.js, TypeScript, GraphQL,
            Node.js, MongoDB, Google Cloud Platform and Stripe.
          </p>
        </div>
        <div className={gridStyles.Col}>
          <h3>Sapo</h3>
          <h4>Front-end Developer</h4>
          <p>
            Built widgets for sapo.pt. Native application development using
            React Native.
          </p>
        </div>
        <div className={gridStyles.Col}>
          <h3>EDP</h3>
          <h4>Front-end Developer</h4>
          <p>
            Built edponline.pt, the largest customer self-service platform in
            Portugal. Using Angular.
          </p>
        </div>
        <div className={gridStyles.Col}>
          <h3>Multiple Clients</h3>
          <h4>Freelance Full-stack Developer</h4>
          <p>
            Built products for multiple clients, with JavaScript, PHP, Node.js,
            MongoDB, MySQL, Wordpress.
          </p>
        </div>
      </div>
    </main>
  </>
);

export default HomePage;
