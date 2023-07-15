import React from 'react';
import iconMap from './icons/icon-map';

const EmptyIcon = () => <div />;

const Icon = ({ name, size, color, ...rest }) => {
  const Icon = iconMap[name] || EmptyIcon;
  return <Icon color={color} style={{ width: size, height: size }} {...rest} />;
};

export default Icon;
