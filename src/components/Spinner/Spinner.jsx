import React from 'react';
import styles from './Spinner.module.scss';

function Spinner({ className, scale, theme }) {
  return (
    <div
      className={styles.container}
      style={{
        transform: `scale(${scale ? scale : 1})`
      }}>
      <div
        className={[
          `${styles['lds-ring']} ${theme ? styles[theme] : ''} ${className ? className : ''}`
        ]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
