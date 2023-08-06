import React from 'react';
import iconMap from './icons/icon-map';

const EmptyIcon = () => <div />;

const Icon = ({ name, size, color, rotate = 0, ...rest }) => {
  const Icon = iconMap[name] || EmptyIcon;
  return (
    <Icon
      color={color}
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}
      {...rest}
    />
  );
};

export default Icon;
