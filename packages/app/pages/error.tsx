import { FunctionComponent } from 'react';
import Head from 'next/head';

const ErrorPage: FunctionComponent = () => (
  <>
    <Head>
      <title>José Carneiro | Error</title>
      <meta name="description" content="José Carneiro | Error" />
    </Head>
    <section className="full-height">
      <div className="container">
        <h1>There was an unknown error.</h1>
      </div>
    </section>
  </>
);

export default ErrorPage;
