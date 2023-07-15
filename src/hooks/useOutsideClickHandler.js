import { useEffect } from 'react';

const useOutsideClickHandler = (ref, action, disableOutsideClick) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && !disableOutsideClick) {
        event.stopPropagation();
        action();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClickHandler;
