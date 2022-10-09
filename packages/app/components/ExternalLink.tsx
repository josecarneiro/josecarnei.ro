import type { ReactHTMLElement } from 'react';
import type { FunctionComponentWithChildren } from '../types';

export interface ExternalLinkProps
  extends Partial<Omit<ReactHTMLElement<HTMLAnchorElement>, 'href'>> {
  to: string;
}

const ExternalLink: FunctionComponentWithChildren<ExternalLinkProps> = ({
  to,
  children
}) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default ExternalLink;
