import React from 'react';
import styles from './Button.module.scss';

//components
import Spinner from '../Spinner/Spinner';

/**
 * This component is used to make a Button.
 *
 * @component
 * @example
 *  <Button loading={true} className='btn' theme='dark' onClick={()=>{}}>button</Button>
 */

const Button = ({ loading, children, className, theme, onClick, ...rest }) => {
  return (
    <button
      className={`${styles.btn} ${theme ? styles[theme] : ''} ${
        className ? styles[className] : ''
      }`}
      disabled={loading}
      onClick={onClick}
      {...rest}>
      {loading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      <div className={loading ? styles.hidden : ''}>{children}</div>
    </button>
  );
};

export default Button;
