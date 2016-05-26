import { PropTypes } from 'react';
import React from 'react';

import {
  calculateRectangleWidth,
  getXYTranslation
} from '../svg/utils';

const Input = ({

  id,
  x,
  y,
  text

}) => {
  return (
    <g transform={getXYTranslation(x, y)}>
      <rect dx={0} dy={0} width={calculateRectangleWidth(10, id, 11)} height={30} fill="red"></rect>
      <text dx={20} dy={9} font-size={11} fill="white">{id}</text>
    </g>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  x: PropTypes.number.required,
  y: PropTypes.number.required,
  text: PropTypes.string.required
};

export default Input;
