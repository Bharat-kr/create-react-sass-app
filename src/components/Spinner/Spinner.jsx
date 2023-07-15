import React from 'react';
import styles from './Spinner.module.scss';

function Spinner({ className, scale }) {
  return (
    <div
      className={styles.container}
      style={{
        transform: `scale(${scale ? scale : 1})`
      }}>
      <div className={[`${styles['lds-ring']} ${styles[`${className}`]}`]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
