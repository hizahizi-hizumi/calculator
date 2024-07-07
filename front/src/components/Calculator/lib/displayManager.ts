import { isDivide, isEqual, isMultiply, isOperator } from "./Operators";

export function displayManager(prevDisplay: string[], character: string) {
  const rest = prevDisplay.slice(0, -1);
  const last = prevDisplay.slice(-1)[0];

  function isDifferentTypeCharacterToLast() {
    return (
      (isOperator(character) && !isOperator(last)) ||
      (!isOperator(character) && isOperator(last))
    );
  }

  if (character === "AC") {
    return [""];
  }

  if (last === "" || isOperator(last)) {
    if (isMultiply(character)) {
      return [""];
    }

    if (isDivide(character)) {
      return [""];
    }

    if (isEqual(character)) {
      return [""];
    }
  }

  if (isEqual(character)) {
    if (isOperator(last)) {
      return prevDisplay;
    }

    const operatorReplaced = prevDisplay.map((value) => {
      if (isMultiply(value)) {
        return "*";
      }
      if (isDivide(value)) {
        return "/";
      }
      return value;
    });

    // biome-ignore lint/security/noGlobalEval:
    return [eval(operatorReplaced.join(""))];
  }

  if (isOperator(character) && isOperator(last)) {
    return [...rest, character];
  }

  if (isDifferentTypeCharacterToLast()) {
    return [...prevDisplay, character];
  }

  if (last === "0") {
    return [...rest, character];
  }

  return [...rest, last + character];
}
