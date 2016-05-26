const SVGNS = 'http://www.w3.org/2000/svg';
const genEl = (tag, ns) => ns ? document.createElementNS(SVGNS, tag) : document.createElement(tag);
const genText = text => document.createTextNode(text);

class SVGRuler {
  constructor () {
    let els = this.generateElements();

    this._text = els.text;
    this._node = els.node;
    this._root = els.root;
  }

  measureText (text, options) {
    options = options || {};
    this._text.textContent = text;
    let ogFontSize = this._node.fontSize;

    if(options.fontSize) {
      this._node.fontSize = options.fontSize;
    }

    let len = this._node.getComputedTextLength();
    this._node.fontSize = ogFontSize;

    return len;
  }

  initialize () {
    document.body.appendChild(this._root);
  }

  generateElements () {
    let root = genEl('svg', SVGNS);
    let node = genEl('text', SVGNS);
    let text = genText('empty');

    root.style.position = 'absolute';
    root.style.top = '-9999px';
    root.style.left = '-9999px';

    node.appendChild(text);
    root.appendChild(node);

    return {
      root,
      node,
      text
    };
  }
}

const RulerInstance = new SVGRuler();

export const initializeRuler = () => { RulerInstance.initialize(); };
export const measureText = text => { return RulerInstance.measureText(text); };

export default RulerInstance;
