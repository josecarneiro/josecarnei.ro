import { FunctionComponent } from 'react';
import { Languages } from '../resume-types';

interface ResumeLanguagesProps {
  languages: Languages;
}

const ResumeLanguages: FunctionComponent<ResumeLanguagesProps> = () => (
  <section className="resume__section resume__section--languages">
    <h2>Language Skills</h2>
    <p>Bilingual proficiency in English and Portuguese, fluent in Spanish.</p>
  </section>
);

export default ResumeLanguages;
