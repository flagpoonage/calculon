// Looking at the source, the line
//
// <rect x="100" y="100" width="400" height="200" fill="yellow" stroke="black" stroke-width="3" />
//
// Describes a rectangle. Here's a brief piece by piece description of everything in that line:
//
// rect - the rectangle is declared using a rect element.
// x, y - the co-ordinates of the top left corner of the rectangle.
// width, height - the width and height of the shape. In some cases, these can be expressed as percentages (such as "20%").
// fill - the colour to use for the interior of the shape. Colours are explained in more detail in a later section.
// stroke - the colour for the line actually drawn for the rectangle.
// stroke-width - the thickness of the line used to draw the rectangle.

import { PropTypes } from 'react';
import React from 'react';

const Rectangle = ({
  x,
  y,
  width,
  height,
  fill,
  children

}) => (
  <rect x={x} y={y} width={width} height={height} fill={fill}>
    {children}
  </rect>
);

Rectangle.propTypes = {
  x: PropTypes.number.required,
  y: PropTypes.number.required,
  width: PropTypes.number.required,
  height: PropTypes.number.required,
  fill: PropTypes.string,
  children: PropTypes.any
};

Rectangle.displayName = 'Rectangle';

export default Rectangle;
