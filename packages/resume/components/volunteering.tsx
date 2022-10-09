import { FunctionComponent } from 'react';
import { Volunteering } from '../resume-types';
import formatDate from '../utils/format-date';

interface ResumeVolunteeringProps {
  volunteering: Volunteering;
}

const ResumeVolunteering: FunctionComponent<ResumeVolunteeringProps> = ({
  volunteering
}) => (
  <section className="resume__section resume__section--volunteering">
    <h2>Volunteering</h2>
    {volunteering.map(
      ({ cause, dateStart, dateEnd, description, role, highlights }, index) => (
        <article key={index} className="listing__item">
          <header className="listing__header">
            <div className="listing__row">
              <h3>{cause}</h3>
              <small>{formatDate([dateStart, dateEnd])}</small>
            </div>
            {description && <small>{description}</small>}
          </header>
          <p>{role}</p>
        </article>
      )
    )}
  </section>
);

export default ResumeVolunteering;
