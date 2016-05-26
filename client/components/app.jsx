require('./styles/app.pcss');

import React from 'react';
import Canvas from './canvas';
import Toolbar from './toolbar';

console.log('New Something');

const App = () => (
  <div className="app" id="appContainer">
    <Toolbar />
    <Canvas />
  </div>
);

export default App;
