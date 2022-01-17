import { useMemo } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../context/theme';
import styles from './style.module.scss';

import type { FunctionComponent } from 'react';

const PageWrapper: FunctionComponent = ({ children }) => {
  const [{ dark, colorful }] = useTheme();

  const classes = useMemo(
    () => [dark && styles.Dark, colorful && styles.Colorful],
    [dark, colorful]
  );

  return (
    <div className={classNames(styles.PageOuterWrapper, classes)}>
      <div className={styles.PageWrapper}>
        <div className={styles.Content}>{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
