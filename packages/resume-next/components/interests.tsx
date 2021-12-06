import { FunctionComponent } from 'react';
import { Interests } from '../resume-types';

interface ResumInterestsProps {
  interests: Interests;
}

const ResumInterests: FunctionComponent<ResumInterestsProps> = ({
  interests
}) => (
  <section className="resume__section resume__section--interests">
    <h2>Interests</h2>
    <span>{interests.join(' ')}</span>
  </section>
);

export default ResumInterests;
