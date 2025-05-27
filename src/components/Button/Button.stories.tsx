import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button',
    size: 'md',
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'lg',
    children: 'Filled Button',
  },
}

export const FilledVariant: Story = {
  args: {
    variant: 'filledVariant',
    size: 'lg',
    children: 'Filled Variant Button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
    children: 'Outlined Button',
  },
}

export const OutlinedSmall: Story = {
  args: {
    variant: 'outlined',
    size: 'sm',
    children: 'Outlined Button',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    size: 'md',
    children: 'Text Button',
  },
}

export const TextSmall: Story = {
  args: {
    variant: 'text',
    size: 'sm',
    children: 'Text Button',
  },
}

export const TextVariant: Story = {
  args: {
    variant: 'textVariant',
    size: 'md',
    children: 'Text Variant Button',
  },
}
