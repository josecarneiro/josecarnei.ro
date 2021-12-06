import { FunctionComponent } from 'react';
import ResumeAbout from '../components/about';

import about from './../data/about.json';

const HomePage: FunctionComponent = () => (
  <>
    <ResumeAbout {...about} />
  </>
);

export default HomePage;
