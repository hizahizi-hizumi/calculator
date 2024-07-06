import type React from "react";

import { theme } from "@/theme";

interface CalculatorRowProps {
  children: React.ReactNode;
}

export function CalculatorRow(props: CalculatorRowProps): React.JSX.Element {
  const { children } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(1),
      }}
    >
      {children}
    </div>
  );
}
