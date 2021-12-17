import { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

interface TrailingTextProps {
  value: string;
  count?: number;
  tag?: keyof JSX.IntrinsicElements;
}

const Element: FunctionComponent<
  {
    tag?: keyof JSX.IntrinsicElements;
  } & { className: string }
> = ({ tag: Tag, children, ...props }) => <Tag {...props}>{children}</Tag>;

const TrailingText: FunctionComponent<
  TrailingTextProps & HTMLAttributes<HTMLElement>
> = ({ value, count = 1, tag = 'h1', ...props }) => (
  <Element tag={tag} className={styles.Title} {...props}>
    {[...new Array(count)].map((_, index) => (
      <span
        key={index}
        className={classNames(!index && 'first')}
        hidden={!!index}
        aria-hidden={!!index}
      >
        {value}
      </span>
    ))}
  </Element>
);

export default TrailingText;
