import type { FunctionComponent } from 'react';
import type { About } from '../resume-types';

interface ResumeAboutProps {
  about: About;
}

const ResumeAbout: FunctionComponent<ResumeAboutProps> = ({
  about: { highlights, name }
}) => (
  <header className="resume__section resume__section--about">
    <h1>
      {name.first} {name.last}
    </h1>
    <div>
      {highlights.map(({ name, value, href }) => (
        <span key={name}>
          <strong>{name}</strong>{' '}
          {(href && <a href={href}>{value}</a>) || value}
        </span>
      ))}
    </div>
  </header>
);

export default ResumeAbout;
