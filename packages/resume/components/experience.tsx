import { FunctionComponent } from 'react';
import { Experience } from '../resume-types';
import formatDate from '../utils/format-date';

interface ResumeExperienceProps {
  experience: Experience;
}

const ResumeExperience: FunctionComponent<ResumeExperienceProps> = ({
  experience
}) => (
  <section className="resume__section resume__section--experience">
    <h2>Experience</h2>
    {experience.map(
      (
        { company, dateStart, dateEnd, description, position, highlights },
        index
      ) => (
        <article key={index} className="listing__item">
          <header className="listing__header">
            <div className="listing__row">
              <h3>{company}</h3>
              <small>{formatDate([dateStart, dateEnd])}</small>
            </div>
            {description && <small>{description}</small>}
          </header>
          <h4>{position}</h4>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      )
    )}
  </section>
);

export default ResumeExperience;
