import type React from "react";

import { theme } from "@/theme";

import { useCalculatorContext } from "../../CalculatorProvider";
import { Operators } from "../../lib/Operators";
import { CalculatorButton } from "../CalculatorButton/CalculatorButton";
import { CalculatorRow } from "../CalculatorRow/CalculatorRow";

export function CalculatorButtons(): React.JSX.Element {
  const { setDisplay } = useCalculatorContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1),
      }}
    >
      <CalculatorRow>
        <CalculatorButton
          character="7"
          type="number"
          onClick={() => setDisplay("7")}
        />
        <CalculatorButton
          character="8"
          type="number"
          onClick={() => setDisplay("8")}
        />
        <CalculatorButton
          character="9"
          type="number"
          onClick={() => setDisplay("9")}
        />
        <CalculatorButton
          character={Operators.PLUS}
          type="operator"
          onClick={() => setDisplay(Operators.PLUS)}
        />
      </CalculatorRow>
      <CalculatorRow>
        <CalculatorButton
          character="4"
          type="number"
          onClick={() => setDisplay("4")}
        />
        <CalculatorButton
          character="5"
          type="number"
          onClick={() => setDisplay("5")}
        />
        <CalculatorButton
          character="6"
          type="number"
          onClick={() => setDisplay("6")}
        />
        <CalculatorButton
          character={Operators.MINUS}
          type="operator"
          onClick={() => setDisplay(Operators.MINUS)}
        />
      </CalculatorRow>
      <CalculatorRow>
        <CalculatorButton
          character="1"
          type="number"
          onClick={() => setDisplay("1")}
        />
        <CalculatorButton
          character="2"
          type="number"
          onClick={() => setDisplay("2")}
        />
        <CalculatorButton
          character="3"
          type="number"
          onClick={() => setDisplay("3")}
        />
        <CalculatorButton
          character={Operators.MULTIPLY}
          type="operator"
          onClick={() => setDisplay(Operators.MULTIPLY)}
        />
      </CalculatorRow>
      <CalculatorRow>
        <CalculatorButton
          character="0"
          type="number"
          onClick={() => setDisplay("0")}
        />
        <CalculatorButton
          character="AC"
          type="all-clear"
          onClick={() => setDisplay("AC")}
        />
        <CalculatorButton
          character={Operators.EQUAL}
          type="operator"
          onClick={() => setDisplay(Operators.EQUAL)}
        />
        <CalculatorButton
          character={Operators.DIVIDE}
          type="operator"
          onClick={() => setDisplay(Operators.DIVIDE)}
        />
      </CalculatorRow>
    </div>
  );
}
