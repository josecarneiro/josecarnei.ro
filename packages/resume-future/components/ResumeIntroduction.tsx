import type { FunctionComponent } from 'react';

export interface Contact {
  name: string;
  href: string;
  value: string;
}

interface ResumeIntroductionProps {
  contacts: Contact[];
}

const ResumeIntroduction: FunctionComponent<ResumeIntroductionProps> = ({
  contacts,
  ...props
}) => (
  <header {...props}>
    <h1>José Maria Carneiro</h1>
    <h3>Senior Front-end Developer based in Lisbon, Portugal</h3>
    <ul>
      {contacts.map(({ name, href, value }) => (
        <li key={name}>
          <strong>{name}:</strong> <a href={href}>{value}</a>
        </li>
      ))}
    </ul>
  </header>
);

export default ResumeIntroduction;
