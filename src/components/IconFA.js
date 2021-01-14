import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

const IconFA = ({ icon, className, style }) => {
  return (
    <FontAwesomeIcon icon={icons[icon]} className={className} style={style} />
  );
};

export default IconFA;
