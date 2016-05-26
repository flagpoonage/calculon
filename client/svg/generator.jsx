const ElementTypes = {
  INPUT: 'INPUT',
  OUTPUT: 'OUTPUT',
  EXPRESSION: 'EXPRESSION',
  ADDITION: 'ADDITION',
  SUBTRACTION: 'SUBTRACTION',
  MULTIPLICATION: 'MULTIPLICATION',
  MAPPING: 'MAPPING',
  REDUCTION: {
    OBJECT: 'REDUCTION_OBJECT',
    ARRAY: 'REDUCTION_ARRAY',
    STRING: 'REDUCTION_STRING',
    NUMBER: 'REDUCTION_NUMBER',
    CUSTOM: 'REDUCTION_CUSTOM'
  }
};

let index = 0;

function idGenFunction() {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYS'.split('');
  index = index === alphabet.length - 1 ? 0 : index + 1;
  return 'instance_' + alphabet[index];
}

const generate = position => {
  let id = idGenFunction();

  return {
    id: id,
    type: ElementTypes.INPUT,
    x: position.x,
    y: position.y
  };
};

export { generate, ElementTypes };
