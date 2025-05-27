import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@components/Button/Button'
import {
  SpinnerProvider,
  useSpinner,
} from '@components/Spinner/SpinnerProvider'
import { Spinner, SpinnerProps } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Component/Spinner',
  component: Spinner,
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: { label: null },
  render: (props) => (
    <div className="bg-black">
      <Spinner {...props}></Spinner>
    </div>
  ),
}

export const WithSize: Story = {
  args: { ...Default.args, size: 120 },
  render: Default.render,
}

export const WithBackgroundColor: Story = {
  args: { ...Default.args, backgroundColor: '#454545' },
  render: (props) => (
    <div style={{ backgroundColor: '#454545', opacity: 0.5 }}>
      <Spinner {...props}></Spinner>
    </div>
  ),
}

export const WithLabel: Story = {
  args: {
    label: '진행 중..',
  },
  render: Default.render,
}

const WithActionChild = (props: SpinnerProps) => {
  const { show, hide } = useSpinner()

  return (
    <div className="flex flex-row gap-[8px]">
      <Button
        variant="filled"
        size="lg"
        onClick={() => show({ size: props.size, label: props.label })}
      >
        Show
      </Button>
      <Button variant="filled" size="lg" onClick={() => hide()}>
        Hide
      </Button>
    </div>
  )
}

export const WithAction: Story = {
  args: { label: '진행 중..' },
  render: (props) => (
    <SpinnerProvider backgroundColor="#000000">
      <WithActionChild {...props} />
    </SpinnerProvider>
  ),
}
