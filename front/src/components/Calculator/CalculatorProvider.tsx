import type React from "react";
import { createContext, useContext, useState } from "react";

import { isDivide, isEqual, isMultiply, isOperator } from "./lib/Operators";

interface CalculatorProviderProps {
  children: React.ReactNode;
}

const CalculatorContext = createContext();

export function CalculatorProvider(
  props: CalculatorProviderProps,
): React.JSX.Element {
  const { children } = props;
  const [display, _setDisplay] = useState([""]);

  function setDisplay(character: string) {
    _setDisplay((prevDisplay) => {
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
    });
  }

  return (
    <>
      <CalculatorContext.Provider value={{ display, setDisplay }}>
        {children}
      </CalculatorContext.Provider>
    </>
  );
}

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  if (context === undefined) {
    throw new Error(
      "useCalculatorContext must be used within a CalculatorProvider",
    );
  }

  return context;
}
