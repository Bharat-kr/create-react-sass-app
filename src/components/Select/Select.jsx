import React, { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import useOutsideClickHandler from '../../hooks/useOutsideClickHandler';
import Icon from '../../icons/Icon';

//value props should be a string in case of single values and a array of string in case multiSelect

const Select = ({
  isSearchable = false,
  options,
  value,
  onChange,
  showDropDownIndicator = true,
  iconName,
  isMulti = false,
  className
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [currOption, setCurrOption] = useState(isMulti ? [] : {});
  const [searchVal, setSearchVal] = useState('');
  const optionsRef = useRef();
  const inputRef = useRef();
  useOutsideClickHandler(
    optionsRef,
    () => {
      setOpenOptions(false);
    },
    false
  );

  useEffect(() => {
    if (!isMulti) {
      options?.forEach((element) => {
        if (element.value === value) {
          setCurrOption(element);
        }
      });
    } else {
      let arr = [];
      options?.forEach((element) => {
        if (value.includes(element.value)) {
          arr.push(element);
        }
      });
      setCurrOption(arr);
    }
  }, [value, isMulti, options]);

  return (
    <div className={`${styles.select_container} ${className ? className : ''}`} ref={optionsRef}>
      <div
        className={styles.value}
        onClick={() => {
          setOpenOptions((prev) => !prev);
          inputRef?.current?.focus();
        }}>
        {iconName && <Icon name={iconName} size={20} />}
        {!isMulti && <p>{!!currOption.value ? currOption.label : 'Select'}</p>}
        {isMulti &&
          (currOption.length > 0 ? (
            <div className={styles.multi_container}>
              {currOption.map((item, idx) => {
                return (
                  <div className={styles.multi_option} key={item.value + idx}>
                    {item.label}{' '}
                    <Icon
                      name="close"
                      size={7}
                      onClick={() => {
                        setCurrOption((prev) => {
                          const filtered = prev.filter((el) => {
                            return el.value !== item.value;
                          });
                          return [...filtered];
                        });
                      }}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Select</p>
          ))}
        {isSearchable && (
          <input
            ref={inputRef}
            className={styles.input}
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          />
        )}
        {showDropDownIndicator && <Icon name="down" size={20} rotate={openOptions ? 180 : 0} />}
      </div>
      {openOptions && (
        <div className={styles.options}>
          {options
            .filter((element) => {
              return element.label.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase());
            })
            .map((item) => {
              return (
                <div
                  className={styles.option}
                  key={item.value}
                  onClick={() => {
                    if (!!onChange) {
                      if (!isMulti) {
                        onChange(item.value);
                      } else {
                        let arr = value;
                        arr.push(item.value);
                        onChange(arr);
                      }
                    }
                    setOpenOptions(false);
                    setSearchVal('');
                  }}>
                  {item.label}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Select;
