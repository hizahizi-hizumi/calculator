import type React from "react";

import { Button } from "@mui/material";
import { blue, red } from "@mui/material/colors";

import { theme } from "@/theme";

type ButtonType = "number" | "operator" | "all-clear";

interface CalculatorButtonProps {
  character: string;
  type: ButtonType;
  onClick: () => void;
}

export function CalculatorButton(
  props: CalculatorButtonProps,
): React.JSX.Element {
  const { character, type, onClick } = props;

  const TypedProps = {
    number: {
      color: "primary",
      sx: {
        backgroundColor: "#fff",
        height: theme.spacing(10),
        fontSize: "1.5em",
      },
    },
    operator: {
      color: "primary",
      sx: {
        backgroundColor: blue[100],
        height: theme.spacing(10),
        fontSize: "1.5em",
        "&:hover": {
          backgroundColor: blue[200],
        },
      },
    },
    "all-clear": {
      color: "error",
      sx: {
        backgroundColor: red[100],
        height: theme.spacing(10),
        fontSize: "1.5em",
        "&:hover": {
          backgroundColor: red[200],
        },
      },
    },
  };

  return (
    <div>
      <Button onClick={onClick} {...TypedProps[type]}>
        {character}
      </Button>
    </div>
  );
}
