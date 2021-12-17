import { FunctionComponent, ReactHTMLElement } from 'react';

export interface ExternalLinkProps
  extends Partial<Omit<ReactHTMLElement<HTMLAnchorElement>, 'href'>> {
  to: string;
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  to,
  children
}) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default ExternalLink;
