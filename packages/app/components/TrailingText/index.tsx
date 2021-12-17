import { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
import GenericElement, { GenericElementProps } from '../GenericElement';

interface TrailingTextProps extends HTMLAttributes<HTMLElement> {
  value: string;
  count?: number;
  tag?: GenericElementProps['tag'];
}

const makeEmptyArray = (length: number): any[] => [...new Array(length)];

const TrailingText: FunctionComponent<TrailingTextProps> = ({
  value,
  count = 1,
  tag = 'h1',
  ...props
}) => (
  <GenericElement tag={tag} className={styles.Title} {...props}>
    {makeEmptyArray(count).map((_, index) => (
      <span
        key={index}
        className={classNames(!index && 'first')}
        hidden={!!index}
        aria-hidden={!!index}
      >
        {value}
      </span>
    ))}
  </GenericElement>
);

export default TrailingText;
