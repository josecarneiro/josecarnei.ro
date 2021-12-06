import { FunctionComponent } from 'react';
import { Education } from '../resume-types';
import formatDate from '../utils/format-date';

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
        <div key={index} className="listing__item">
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
        </div>
      )
    )}
  </section>
);

export default ResumeEducation;
