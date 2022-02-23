import type { FunctionComponent, HTMLAttributes } from 'react';

interface Institution {
  name: string;
  description?: string;
}

interface Role {
  name: string;
  period?: string;
}

interface ResumeEntryProps extends HTMLAttributes<HTMLDivElement> {
  institution?: Institution;
  roles?: Role[];
}

const ResumeEntry: FunctionComponent<ResumeEntryProps> = ({
  institution,
  roles,
  children,
  ...props
}) => (
  <article {...props}>
    <h3>{institution.name}</h3>
    {institution.description && <h6>{institution.description}</h6>}
    {roles &&
      roles.map(({ name, period }) => (
        <div key={name} className="role">
          <h5>{name}</h5>
          {period && <h6>{period}</h6>}
        </div>
      ))}
    {children}
  </article>
);

export default ResumeEntry;
