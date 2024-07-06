import type { Meta, StoryObj } from "@storybook/react";

import { CalculatorButton } from "./CalculatorButton";

const meta = {
  component: CalculatorButton,
} satisfies Meta<typeof CalculatorButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: "0",
    type: "number",
    onClick: () => {},
  },
};
