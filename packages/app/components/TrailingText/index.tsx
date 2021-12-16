import { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

interface TrailingTextProps {
  value: string;
  count?: number;
  tag?: keyof JSX.IntrinsicElements;
}

const TrailingText: FunctionComponent<TrailingTextProps> = ({
  value,
  count = 1,
  tag = 'h1'
}) => {
  const HeadingTag = tag;
  return (
    <HeadingTag className={styles.Title}>
      {[...new Array(count)].map((_, index) => (
        <span
          key={index}
          className={classNames(!index && 'first')}
          aria-hidden={!!index}
        >
          {value}
        </span>
      ))}
    </HeadingTag>
  );
};

export default TrailingText;
