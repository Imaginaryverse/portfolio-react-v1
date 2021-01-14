import React, { useContext } from 'react';
import { Context } from '../store/Store';
import { copy } from '../utils/CopyService';

const Text = ({
  copyText,
  copyKey,
  style,
  type,
  className,
  upperCase,
  lowerCase,
  capitalizeEach,
}) => {
  const [state] = useContext(Context);

  const getCopy = () => {
    const selectedCopy = copy.find((item) => item.key === copyKey);
    const print = selectedCopy
      ? selectedCopy[state.language]
      : copyText
      ? copyText
      : copyKey;

    const formattedText = upperCase
      ? print.toUpperCase()
      : lowerCase
      ? print.toLowerCase()
      : capitalizeEach
      ? print
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      : print;

    return formattedText;
  };

  switch (type) {
    case 'header-large':
      return (
        <h1 style={style} className={'font-header-large ' + className}>
          {getCopy()}
        </h1>
      );
    case 'header-normal':
      return (
        <h2 style={style} className={'font-header-normal ' + className}>
          {getCopy()}
        </h2>
      );
    case 'header-small':
      return (
        <h3 style={style} className={'font-header-small ' + className}>
          {getCopy()}
        </h3>
      );
    case 'paragraph':
    default:
      return (
        <p style={style} className={'font-paragraph ' + className}>
          {getCopy()}
        </p>
      );
  }
};

export default Text;
