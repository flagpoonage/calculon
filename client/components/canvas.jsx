require('./styles/canvas.pcss');

import { connect } from 'react-redux';
import PatternDefinition from './pattern_def';
import Pattern from './pattern';
import React from 'react';
import { getClientElementClickPosition } from '../svg/utils';
import { ElementTypes } from '../svg/generator';
import Input from './calc_input';

const mapElements = el => ({
  inputs: el.filter(e => e.type === ElementTypes.INPUT)
});

const Canvas = connect(

  state => ({
    windowData: state.window,
    toolbar: state.toolbar,
    el: mapElements(state.elements)
  }),

  dispatch => ({
    onClick: ev => {
      let pos = getClientElementClickPosition(ev.currentTarget, ev.clientX, ev.clientY);
      dispatch({ type: 'CANVAS_CLICK', position: pos });
    }
  })

)(({ windowData, toolbar, el, onClick }) => {
  return (
    <svg className="canvas"
      width={windowData.width - toolbar.width}
      height={windowData.height}
      style={{ marginLeft: toolbar.width }}
      onClick={onClick}>
      <PatternDefinition />
      <Pattern />

      {el.inputs.map(input => <Input {...input} />)}

    </svg>
  );
});

export default Canvas;
