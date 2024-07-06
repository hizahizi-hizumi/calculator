import type React from "react";

import { blue } from "@mui/material/colors";

import { theme } from "@/theme";
import { CalculatorProvider } from "./CalculatorProvider";
import { CalculatorButtons } from "./components/CalculatorButtons/CalculatorButtons";
import { CalculatorDisplay } from "./components/CalculatorDisplay/CalculatorDisplay";

export function Calculator(): React.JSX.Element {
  return (
    <div
      style={{
        backgroundColor: blue[50],
        padding: theme.spacing(1),
        width: theme.spacing(37),
      }}
    >
      <CalculatorProvider>
        <CalculatorDisplay />
        <CalculatorButtons />
      </CalculatorProvider>
    </div>
  );
}
