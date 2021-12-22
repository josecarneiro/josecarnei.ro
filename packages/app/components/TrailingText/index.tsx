import { FunctionComponent, HTMLAttributes, useMemo } from 'react';
import GenericElement, { GenericElementProps } from '../GenericElement';
import styles from './style.module.scss';

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
}) => {
  const list = useMemo(() => makeEmptyArray(count), [count]);
  return (
    <GenericElement tag={tag} className={styles.Title} {...props}>
      <strong>{value}</strong>
      {list.map((_, index) => (
        <small key={index} hidden aria-hidden>
          {value}
        </small>
      ))}
    </GenericElement>
  );
};

export default TrailingText;
