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
    <ul>
      {highlights.map(({ name, value, href }) => (
        <li key={name}>
          <strong>{name}</strong>{' '}
          {(href && <a href={href}>{value}</a>) || value}
        </li>
      ))}
    </ul>
  </header>
);

export default ResumeAbout;
