import React from 'react';
import styles from './Tooltip.module.scss';

//Positions => top , left , right , bottom

const Tooltip = ({ value = '', children, position = 'top' }) => {
  return (
    <div className={styles.tooltip}>
      <div className={`${styles.value} ${styles[position]}`}>{value}</div>
      {children}
    </div>
  );
};

export default Tooltip;
