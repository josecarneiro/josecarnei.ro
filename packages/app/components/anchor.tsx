import { FunctionComponent } from 'react';

interface AnchorElementProps {
  url: string;
  value: string;
}

const Anchor: FunctionComponent<AnchorElementProps> = ({ url, value }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {value}
  </a>
);

export default Anchor;
