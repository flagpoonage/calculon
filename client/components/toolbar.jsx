require('./styles/toolbar.pcss');

import React from 'react';
import { connect } from 'react-redux';

const generateStyle = opt => ({ width: opt.width + 'px' });

const Toolbar = connect(

  state => ({
    width: state.toolbar.width,
    mode: state.mode
  }),

  dispatch => ({
    onModeChage: (mode, data) => () => dispatch({ type: 'SET_CANVAS_MODE', mode: mode, data: data})
  })

)(({ width, mode, onModeChage }) => (
  <div className="toolbar" style={generateStyle({ width: width })}>
    <span>{mode.key}</span>
    <div>
      <button onClick={onModeChage('PLACEMENT', { type: 'input' })} >
        Placement
      </button>
      <button onClick={onModeChage('NAVIGATE')}>
        Navigate
      </button>
    </div>
  </div>
));

export default Toolbar;
