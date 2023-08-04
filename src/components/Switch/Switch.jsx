import React from 'react';
import styles from './Switch.module.scss';

const Switch = ({ name, checked, onChange, disabled = false, onClick }) => {
  return (
    <label className={styles.switch_container}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        onClick={onClick}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Switch;
