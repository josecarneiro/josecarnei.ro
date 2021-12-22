import { FunctionComponent, useMemo } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../context/theme';
import styles from './style.module.scss';

const PageWrapper: FunctionComponent = ({ children }) => {
  const [{ dark, colorful }] = useTheme();

  const classes = useMemo(
    () => [dark && styles.Dark, colorful && styles.Colorful],
    [dark, colorful]
  );

  return (
    <div className={classNames(styles.PageWrapper, classes)}>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default PageWrapper;
