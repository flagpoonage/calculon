import { generate } from './svg/generator';

const RootReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);

  switch(action.type) {
  case 'SET_WINDOW_SIZE':
    newState.window = Object.assign({}, newState.window, {
      width: action.width,
      height: action.height
    });
    break;

  case 'SET_CANVAS_MODE':
    newState.mode = Object.assign({}, {
      key: action.mode,
      data: action.data
    });
    break;

  case 'CANVAS_CLICK':
    newState.elements = state.elements.slice(0);

    var newElement = generate(action.position);
    newState.elements.push(newElement);
    break;
  }

  return newState;
};

export default RootReducer;
