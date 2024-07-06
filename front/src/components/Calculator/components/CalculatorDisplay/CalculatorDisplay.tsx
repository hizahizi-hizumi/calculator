import type React from "react";

import { Box } from "@mui/material";

import { theme } from "@/theme";
import { useCalculatorContext } from "../../CalculatorProvider";
import { isOperator } from "../../lib/Operators";

function formatNumber(value: string): string {
  const number = Number.parseFloat(value);
  return new Intl.NumberFormat("en-US").format(number);
}

function formatDisplay(values: string[]): string {
  const numberFormatted = values.map((value) => {
    if (!value) {
      return "\u00A0";
    }

    if (isOperator(value)) {
      return value;
    }
    return formatNumber(value);
  });

  return numberFormatted.join(" ");
}

export function CalculatorDisplay(): React.JSX.Element {
  const { display } = useCalculatorContext();

  return (
    <>
      <Box
        sx={{
          textAlign: "right",
          padding: "0 .5em",
          marginBottom: theme.spacing(1),
          fontSize: "3em",
          lineHeight: "1.5em",
          backgroundColor: "#fff",
          color: theme.palette.primary.main,
          maxWidth: "100%",
          overflowX: "scroll",
          textWrap: "nowrap",
        }}
      >
        {formatDisplay(display)}
      </Box>
    </>
  );
}
