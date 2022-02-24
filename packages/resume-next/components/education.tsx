import formatDate from '../utils/format-date';

import type { FunctionComponent } from 'react';
import type { Education } from '../resume-types';

interface ResumeEducationProps {
  education: Education;
}

const ResumeEducation: FunctionComponent<ResumeEducationProps> = ({
  education
}) => (
  <section className="resume__section resume__section--education">
    <h2>Education</h2>
    {education.map(
      (
        { school, dateStart, dateEnd, description, degree, highlights },
        index
      ) => (
        <article key={index} className="listing__item">
          <header className="listing__header">
            <div className="listing__row">
              <h3>{school}</h3>
              <small>{formatDate([dateStart, dateEnd])}</small>
            </div>
            {description && <small>{description}</small>}
          </header>
          <h4>{degree}</h4>
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

export default ResumeEducation;
