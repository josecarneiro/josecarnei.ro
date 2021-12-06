import { FunctionComponent } from 'react';
import { Volunteering } from '../resume-types';

interface ResumeVolunteeringProps {
  volunteering: Volunteering;
}

const ResumeVolunteering: FunctionComponent<ResumeVolunteeringProps> = ({
  volunteering
}) => (
  <section className="resume__section resume__section--volunteering">
    <h2>Volunteering</h2>
    <span>{volunteering.join(' | ')}</span>
  </section>
);

export default ResumeVolunteering;
