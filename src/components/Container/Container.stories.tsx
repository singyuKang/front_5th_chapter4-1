import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Container } from "./Container";
import { Device } from "src/modules/common/device/Device";

const meta: Meta<typeof Container> = {
  title: "Component/Page/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

const children = (
  <div className="flex justify-center items-center w-full h-10 bg-secondary text-center font-primary text-white">
    Children area
  </div>
);
export const DesktopDefault: Story = {
  args: {
    device: Device.desktop,
    variant: "wide",
    children,
  },
};

export const DesktopWide: Story = {
  args: {
    device: Device.desktop,
    variant: "wide",
    children,
  },
};

export const DesktopWidest: Story = {
  args: {
    device: Device.desktop,
    variant: "widest",
    children,
  },
};

export const Mobile: Story = {
  args: {
    device: Device.mobile,
    children,
  },
};
