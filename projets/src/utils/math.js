export function division(a, b) {
  if (b === 0) {
    throw new Error("Division par zéro");
  }
  return a / b;
}

export const add = (a, b) => a + b;
export const substract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export default multiply;
//exports.division = division;
