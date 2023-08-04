import { useState } from 'react';
import Icon from '../../icons/Icon';
import styles from './Input.module.scss';
import Tooltip from '../Tooltip/Tooltip';

const inputTypes = {
  SEARCH: 'search',
  PASSWORD: 'password',
  PHONE: 'phone'
};

const Input = ({
  type = '',
  onChange,
  isCopyable,
  value,
  placeholder = 'Type here...',
  ...rest
}) => {
  const [eye, setEye] = useState(true);
  const [copyToolTip, setCopyToolTip] = useState('copy');

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopyToolTip('copied!');
    setTimeout(() => {
      setCopyToolTip('copy');
    }, 3000);
  };

  return (
    <div className={`${styles.input} ${inputTypes.PHONE === type ? styles.phone : ''}`}>
      {type === inputTypes.SEARCH && <Icon name="search" className={styles.icon} size={20} />}
      {type === inputTypes.PHONE && <div className={styles.prefix}>+91</div>}
      <input
        type={type === inputTypes.PASSWORD && eye ? 'password' : 'text'}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {type === 'password' && eye && (
        <Tooltip value="show" position="right">
          <Icon
            name="eye"
            className={styles.icon}
            size={16}
            onClick={() => {
              setEye(false);
            }}
          />
        </Tooltip>
      )}
      {type === inputTypes.PASSWORD && !eye && (
        <Tooltip value="hide" position="right">
          <Icon
            name="eye_off"
            className={styles.icon}
            size={16}
            onClick={() => {
              setEye(true);
            }}
          />
        </Tooltip>
      )}
      {isCopyable && (
        <Tooltip value={copyToolTip} position="top">
          <Icon name="copy" size={16} className={styles.icon} onClick={handleCopyToClipboard} />
        </Tooltip>
      )}
    </div>
  );
};

export default Input;
