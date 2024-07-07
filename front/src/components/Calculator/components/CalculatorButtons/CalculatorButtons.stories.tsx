import type { Meta, StoryObj } from "@storybook/react";

import { CalculatorProvider } from "../../CalculatorProvider";
import { CalculatorButtons } from "./CalculatorButtons";

const meta = {
  component: CalculatorButtons,
} satisfies Meta<typeof CalculatorButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <CalculatorProvider>
        <Story />
      </CalculatorProvider>
    ),
  ],
};
