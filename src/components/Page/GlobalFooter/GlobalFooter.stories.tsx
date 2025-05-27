import type { Meta, StoryObj } from '@storybook/react'
import { Device } from '@common/device/Device'
import { GlobalFooter } from './GlobalFooter'

const meta: Meta<typeof GlobalFooter> = {
  title: 'Component/GlobalFooter',
  component: GlobalFooter,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof GlobalFooter>

export const Desktop: Story = {
  args: {
    device: Device.desktop,
  },
}

export const Mobile: Story = {
  args: {
    device: Device.mobile,
  },
}
