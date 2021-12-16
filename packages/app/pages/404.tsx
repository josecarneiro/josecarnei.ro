import { FunctionComponent } from 'react';
import Head from 'next/head';
import TrailingText from '../components/TrailingText';

const ErrorPage: FunctionComponent = () => (
  <>
    <Head>
      <title>José Carneiro | Error</title>
      <meta name="description" content="José Carneiro | Error" />
    </Head>
    <div className="Content">
      <TrailingText value="There was an unknown error." count={10} />
    </div>
  </>
);

export default ErrorPage;
