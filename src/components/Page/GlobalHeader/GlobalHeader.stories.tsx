import type { Meta, StoryObj } from '@storybook/react'
import { Device } from '@common/device/Device'
import { GlobalHeader } from './GlobalHeader'

const meta: Meta<typeof GlobalHeader> = {
  title: 'Component/GlobalHeader',
  component: GlobalHeader,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof GlobalHeader>

export const Desktop: Story = {
  args: {
    device: Device.desktop,
  },
}

export const Mobile: Story = {
  args: {
    ...Desktop.args,
    device: Device.mobile,
  },
}
