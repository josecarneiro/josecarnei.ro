import { FunctionComponent } from 'react';
import { Certifications } from '../resume-types';

interface ResumeCertificationsProps {
  certifications: Certifications;
}

const ResumeCertifications: FunctionComponent<ResumeCertificationsProps> = ({
  certifications
}) => (
  <section className="resume__section resume__section--certifications">
    <h2>Certifications</h2>
    {certifications.map(({ title, date, issuer, description }, index) => (
      <article key={index} className="listing__item">
        <header className="listing__header">
          <div className="listing__row">
            <h3>{title}</h3>
            {date && (
              <small>
                {date.month} {date.year}
              </small>
            )}
          </div>
          <small>{issuer}</small>
          {description && <p>{description}</p>}
        </header>
      </article>
    ))}
  </section>
);

export default ResumeCertifications;
