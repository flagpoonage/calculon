import { measureText } from './ruler';

const getClientElementClickPosition = (el, windowX, windowY) => {
  let rect = el.getBoundingClientRect();

  return {
    x: windowX - rect.left,
    y: windowY - rect.top
  };
};

const calculateRectangleWidth = (padding, text, fontSize) => {
  return (padding * 2) + measureText(text, fontSize);
};

const getXYTranslation = (x, y) => 'translate(' + x + ', ' + y + ')';

export {
  getClientElementClickPosition,
  calculateRectangleWidth,
  getXYTranslation
};
