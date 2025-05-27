import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./PageHeader";
import { Device } from "@/modules/common/device/Device";

const meta: Meta<typeof PageHeader> = {
  title: "Component/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Desktop: Story = {
  args: {
    device: Device.desktop,
    title: "페이지 제목",
  },
};

export const Mobile: Story = {
  args: {
    ...Desktop.args,
    device: Device.mobile,
  },
};
