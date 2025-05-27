import type { Meta, StoryObj } from '@storybook/react'
import { InputWrapper } from './InputWrapper'

const meta: Meta<typeof InputWrapper> = {
  title: 'Component/Input/InputWrapper',
  component: InputWrapper,
}

export default meta

type Story = StoryObj<typeof InputWrapper>

export const Default: Story = {
  args: {
    adornments: [
      {
        position: 'start',
        child: <div>Leading 1</div>,
      },
      {
        position: 'end',
        child: <div>Trailing 1</div>,
      },
      {
        position: 'end',
        child: <div>Trailing 2</div>,
      },
      {
        position: 'start',
        child: <div>Leading 2</div>,
      },
    ],
    label: <div>label</div>,
    caption: <caption>caption</caption>,
    children: <div>children</div>,
  },
}
