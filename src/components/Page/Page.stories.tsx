import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "./Page";
import { Device } from "@/modules/common/device/Device";
import { Container } from "../Container/Container";

const meta: Meta<typeof Page> = {
  title: "Component/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Desktop: Story = {
  args: {
    device: Device.desktop,
    children: (
      <Container device={Device.desktop}>
        <div className="min-h-[50vh] text-center">Children</div>
      </Container>
    ),
  },
};

export const Mobile: Story = {
  args: {
    ...Desktop.args,
    device: Device.mobile,
    children: (
      <Container device={Device.mobile}>
        <div className="min-h-[50vh] text-center">Children</div>
      </Container>
    ),
  },
};
