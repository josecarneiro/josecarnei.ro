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
    <div className="institution">
      <h3>{institution.name}</h3>
      {institution.description && <h5>{institution.description}</h5>}
    </div>
    {roles &&
      roles.map(({ name, period }) => (
        <div key={name} className="role">
          <h4>{name}</h4>
          {period && <h6>{period}</h6>}
        </div>
      ))}
    {children}
  </article>
);

export default ResumeEntry;
