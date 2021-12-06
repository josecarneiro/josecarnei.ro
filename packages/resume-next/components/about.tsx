import { FunctionComponent } from 'react';
import { About } from '../resume-types';

interface ResumeAboutProps {
  about: About;
}

const ResumeAbout: FunctionComponent<ResumeAboutProps> = ({
  about: { contact, ...about }
}) => (
  <header className="resume__section resume__section--about">
    <h1>
      {about.name.first} {about.name.last}
    </h1>
    <div>
      <span>
        <strong>Born </strong>
        {about.birthDate.month} {about.birthDate.day}
        <sub>th</sub>, {about.birthDate.year}
      </span>
      <span>
        <strong>Nationality</strong> {about.nationality}
      </span>
      <span>
        <strong>Location</strong> {about.location.city},{' '}
        {about.location.country}
      </span>
      <span>
        <strong>Email</strong>{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </span>
      <span>
        <strong>Website</strong> <a href={contact.website}>{contact.website}</a>
      </span>
      <span>
        <strong>LinkedIn</strong>{' '}
        <a href={`https://linkedin.com/${contact.social.linkedin}`}>
          {contact.social.linkedin}
        </a>
      </span>
      <span>
        <strong>Github</strong>{' '}
        <a href={`https://linkedin.com/${contact.social.github}`}>
          {contact.social.github}
        </a>
      </span>
    </div>
  </header>
);

export default ResumeAbout;
