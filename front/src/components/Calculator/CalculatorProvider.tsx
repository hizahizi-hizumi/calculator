import type React from "react";
import { createContext, useContext, useState } from "react";

import { displayManager } from "./lib/displayManager";

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
    _setDisplay((prevDisplay) => displayManager(prevDisplay, character));
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
