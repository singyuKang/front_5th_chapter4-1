import type { Meta, StoryObj } from "@storybook/react";
import { ColoredBox } from "./ColoredBox";

const meta: Meta<typeof ColoredBox> = {
  title: "Foundation/Color",
  component: ColoredBox,
  argTypes: {
    textColor: {
      table: {
        disable: true,
      },
    },
    backgroundColor: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColoredBox>;

export const Default: Story = {
  args: {
    backgroundColor: "primary",
    style: {
      display: "inline-block",
      width: 64,
      height: 64,
    },
    as: "div",
  },
};
