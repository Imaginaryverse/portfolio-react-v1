import React from 'react';
import copyKeys, { useCopy } from '../utils/CopyService';

const Input = ({
  name,
  id,
  className,
  style,
  type,
  placeholderCopyKey,
  placeholderCopy,
  value,
  onChange,
  required,
  valueCopyKey,
  disabled,
}) => {
  const copy = useCopy();

  switch (type) {
    case 'textarea':
      return (
        <textarea
          name={name}
          id={id}
          className={className}
          style={style}
          type={type}
          placeholder={
            placeholderCopyKey ? copy[placeholderCopyKey] : placeholderCopy
          }
          value={value}
          onChange={onChange}
          required={required}
        />
      );
    case 'submit':
      return (
        <input
          type={type}
          className={className}
          value={copy[valueCopyKey]}
          disabled={disabled}
        />
      );
    default:
      return (
        <input
          name={name}
          id={id}
          className={className}
          style={style}
          type={type}
          placeholder={
            placeholderCopyKey ? copy[placeholderCopyKey] : placeholderCopy
          }
          value={value}
          onChange={onChange}
          required={required}
        />
      );
  }
};

export default Input;
