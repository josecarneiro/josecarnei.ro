import { FunctionComponent } from 'react';
import { LanguageCertification, Languages } from '../resume-types';

interface ResumeLanguagesProps {
  languages: Languages;
}

const ResumeLanguages: FunctionComponent<ResumeLanguagesProps> = ({
  languages
}) => {
  const certifications = languages
    .filter(({ certifications }) => certifications)
    .reduce(
      (acc, { certifications }) => [...acc, ...certifications],
      [] as LanguageCertification[]
    );
  return (
    <section className="resume__section resume__section--languages">
      <h2>Languages</h2>
      <div className="grid">
        <div className="col">
          <strong>Language</strong>
        </div>
        <div className="col">
          <strong>Orality</strong>
        </div>
        <div className="col">
          <strong>Comprehension</strong>
        </div>
        <div className="col">
          <strong>Writing</strong>
        </div>
      </div>
      {languages.map((language, index) => (
        <div key={index} className="grid">
          <div className="col">
            <b>{language.name}</b>
          </div>
          {(language.native && (
            <div className="col col--large">
              <span>Native Speaker</span>
            </div>
          )) || (
            <>
              <div className="col">
                <span>{language.orality}</span>
              </div>
              <div className="col">
                <span>{language.comprehension}</span>
              </div>
              <div className="col">
                <span>{language.writing}</span>
              </div>
            </>
          )}
        </div>
      ))}
      {certifications.length && (
        <div className="grid">
          <div className="col">
            <strong>Certifications</strong>
          </div>
          <div className="col--large">
            {certifications.map(({ name, grade, date }) => (
              <>
                <em>Certification</em>
                <span>{name}</span>
                <em>Grade</em>
                <span>{grade}</span>
                <em>Date</em>
                <span>{date.year}</span>
              </>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeLanguages;
