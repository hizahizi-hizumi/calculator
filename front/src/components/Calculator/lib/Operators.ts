export type Operator = "+" | "-" | "×" | "/" | "=";

export type OperatorsType = {
  [key: string]: Operator;
};

export const Operators: OperatorsType = {
  PLUS: "+",
  MINUS: "-",
  MULTIPLY: "×",
  DIVIDE: "÷",
  EQUAL: "=",
};

export function isOperator(character: Operator): boolean {
  return Object.values(Operators).includes(character);
}

export function isPlus(character: Operator): boolean {
  return character === Operators.PLUS;
}

export function isMinus(character: Operator): boolean {
  return character === Operators.MINUS;
}

export function isMultiply(character: Operator): boolean {
  return character === Operators.MULTIPLY;
}

export function isDivide(character: Operator): boolean {
  return character === Operators.DIVIDE;
}

export function isEqual(character: Operator): boolean {
  return character === Operators.EQUAL;
}
