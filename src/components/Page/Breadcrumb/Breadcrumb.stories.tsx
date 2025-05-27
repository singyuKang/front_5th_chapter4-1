import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";
import { Device } from "src/modules/common/device/Device";

const meta: Meta<typeof Breadcrumb> = {
  title: "Component/Page/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Desktop: Story = {
  args: {
    device: Device.desktop,
    items: ["Level 2", "Level 3", "Level 4"],
  },
};

export const Mobile: Story = {
  args: {
    device: Device.mobile,
    items: ["Level 2", "Level 3", "Level 4"],
  },
};
