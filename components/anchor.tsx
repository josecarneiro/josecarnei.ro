import { FunctionComponent } from 'react';

const Anchor: FunctionComponent<{ url: string; value: string }> = ({
  url,
  value
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {value}
  </a>
);

export default Anchor;
