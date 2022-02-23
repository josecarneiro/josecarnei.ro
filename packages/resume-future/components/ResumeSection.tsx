import type { FunctionComponent, HTMLAttributes } from 'react';

interface ResumeSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const ResumeSection: FunctionComponent<ResumeSectionProps> = ({
  title,
  children,
  ...props
}) => (
  <section {...props}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

export default ResumeSection;
