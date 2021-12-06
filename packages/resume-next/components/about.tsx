import { FunctionComponent } from 'react';

interface ResumeAbout {
  name: {
    first: string;
    last: string;
  };
  birthDate: {
    day: number;
    month: string;
    year: number;
  };
  nationality: string;
  location: {
    city: string;
    country: string;
  };
  contact: {
    email: string;
    website: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
}

type ResumeAboutProps = ResumeAbout;

const ResumeAbout: FunctionComponent<ResumeAboutProps> = (about) => (
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
        <strong>Address</strong> {about.location.city}, {about.location.country}
      </span>
      <span>
        <strong>Email</strong> {about.contact.email}
      </span>
      <span>
        <strong>Website</strong> {about.contact.website}
      </span>
      <span>
        <strong>LinkedIn</strong> {about.contact.social.linkedin}
      </span>
      <span>
        <strong>Github</strong> {about.contact.social.github}
      </span>
    </div>
  </header>
);

export default ResumeAbout;
