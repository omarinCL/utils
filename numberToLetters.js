export const numberToLetters = (number) => {
  const numberArray = `${number}`.split('');
  const units = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const tensBase = [
    'dieci',
    'veinti',
    'treinta',
    'cuarenta',
    'cincuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noventa',
  ];

  const tens = [
    'diez',
    'veinte',
    'treinta',
    'cuarenta',
    'ciencuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noventa',
  ];

  const hundredsBase = [
    'ciento',
    'doscientos',
    'trescientos',
    'cuatroscientos',
    'quinientos',
    'seiscientos',
    'setecientos',
    'ochocientos',
    'novecientos',
  ];

  const tenString = (valArray) => {
    const [tenPart, unitPart] = valArray;
    const val = parseInt(valArray.join(''), 0);
    switch (val) {
      case 11:
        return 'once';
      case 12:
        return 'doce';
      case 13:
        return 'trece';
      case 14:
        return 'catorce';
      case 15:
        return 'quince';
      default: {
        if (unitPart === '0') return tens[tenPart - 1];
        if (['1', '2'].includes(tenPart)) return `${tensBase[tenPart - 1]}${units[unitPart]}`;
        return `${tensBase[tenPart - 1]}y${units[unitPart]}`;
      }
    }
  };

  const hundredString = (valArray) => {
    const [hundredPart, tenPart, unitPart] = valArray;
    const val = parseInt(valArray.join(''), 0);

    if (val === 100) return 'cien';
    if (tenPart === '0' && unitPart === '0') return `${hundredsBase[hundredPart - 1]}`;
    if (tenPart === '0' && unitPart !== '0') return `${hundredsBase[hundredPart - 1]}${units[parseInt(unitPart, 0)]}`;
    return `${hundredsBase[hundredPart - 1]}${tenString([tenPart, unitPart])}`;
  };

  switch (numberArray.length) {
    case 1:
      return units[number];
    case 2:
      return tenString(numberArray);
    case 3:
      return hundredString(numberArray);
    default:
      return '';
  }
};
