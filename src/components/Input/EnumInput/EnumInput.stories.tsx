import type { Meta, StoryObj } from '@storybook/react'
import { EnumInputListItem } from '@components/Input/EnumInput/EnumInputListItem'
import { EnumInput } from './EnumInput'
import { EnumInputType } from './EnumInputType'
import { EnumInputViewType } from './EnumInputViewType'

const meta: Meta<typeof EnumInput> = {
  title: 'Component/Input/EnumInput',
  component: EnumInput,
  argTypes: {
    type: {
      control: 'select',
      options: EnumInputType._values,
      defaultValue: EnumInputType.single,
    },
    view: {
      control: 'select',
      options: EnumInputViewType._values,
    },
  },
}

export default meta

type Story = StoryObj<typeof EnumInput>

export const SingleSelectionList: Story = {
  args: {
    type: EnumInputType.single,
    view: EnumInputViewType.list,
    name: 'single-selection-list',
    options: [
      { value: 'Option 1', label: '옵션 1' },
      { value: 'Option 2', label: '옵션 2' },
      { value: 'Option 3', label: '옵션 3' },
    ],
    onValueChanged: console.log,
  },
}

export const SingleSelectionListAndDefaultValue: Story = {
  args: {
    type: EnumInputType.single,
    view: EnumInputViewType.list,
    name: 'single-selection-list-and-default-value',
    options: [
      { value: 'Option 1', label: '옵션 1' },
      { value: 'Option 2', label: '옵션 2', checked: true },
      { value: 'Option 3', label: '옵션 3' },
    ],
    onValueChanged: console.log,
  },
}

export const MultipleSelectionList: Story = {
  args: {
    type: EnumInputType.multiple,
    view: EnumInputViewType.list,
    name: 'multiple-selection-list',
    options: [
      { value: 'Option 1', label: '옵션 1' },
      { value: 'Option 2', label: '옵션 2' },
      { value: 'Option 3', label: '옵션 3' },
    ],
    onValueChanged: console.log,
  },
}

export const MultipleSelectionListAndDefaultValues: Story = {
  args: {
    type: EnumInputType.multiple,
    view: EnumInputViewType.list,
    name: 'multiple-selection-list-and-default-values',
    options: [
      { value: 'Option 1', label: '옵션 1', checked: true },
      { value: 'Option 2', label: '옵션 2' },
      { value: 'Option 3', label: '옵션 3', checked: true },
    ],
    onValueChanged: console.log,
  },
}

export const MultipleSelectionVerticalList: Story = {
  args: {
    type: EnumInputType.multiple,
    view: EnumInputViewType.list,
    name: 'multiple-selection-vertical-list',
    align: 'vertical',
    options: [
      { value: 'Option 1', label: '옵션 1' },
      { value: 'Option 2', label: '옵션 2' },
      { value: 'Option 3', label: '옵션 3' },
    ],
    onValueChanged: console.log,
  },
}

export const MultipleSelectionListWithAllCheckedOption: Story = {
  args: {
    type: EnumInputType.multiple,
    view: EnumInputViewType.list,
    name: 'multiple-selection-list-with-all-checked-option',
    options: [
      { value: 'Option 1', label: '옵션 1' },
      { value: 'Option 2', label: '옵션 2' },
      { value: 'Option 3', label: '옵션 3' },
    ],
    onValueChanged: console.log,
    enableAllChecked: true,
  },
}

export const MultipleSelectionListWithIndeterminatedState: Story = {
  args: {
    type: EnumInputType.multiple,
    view: EnumInputViewType.list,
    name: 'multiple-selection-list-with-indeterminated-state',
    options: [
      { value: 'Option 1', label: '옵션 1' },
      { value: 'Option 2', label: '옵션 2' },
      { value: 'Option 3', label: '옵션 3' },
    ],
    onValueChanged: console.log,
    enableAllChecked: true,
    enableIndeterminated: true,
  },
}

export const MultipleSelectionListWithCustomDesign: Story = {
  args: {
    type: EnumInputType.multiple,
    view: EnumInputViewType.list,
    name: 'multiple-selection-list-with-custom-design',
    options: [
      { value: 'Option 1', label: '옵션 1' },
      { value: 'Option 2', label: '옵션 2' },
      { value: 'Option 3', label: '옵션 3' },
    ],
    onValueChanged: console.log,
    enableAllChecked: true,
    align: 'vertical',
    itemsWrapperClassName: '!gap-y-0',
    renderAllCheckedItem: (props) => (
      <div className="bg-gray5">
        <EnumInputListItem {...props} />
      </div>
    ),
    renderItem: (props) => (
      <div className="bg-gray3">
        <EnumInputListItem {...props} />
      </div>
    ),
  },
}

export const SingleSelectionGroup: Story = {
  args: {
    type: EnumInputType.single,
    view: EnumInputViewType.group,
    name: 'single-selection-group',
    options: [
      { value: 'Option 1', label: '옵션 1' },
      { value: 'Option 2', label: '옵션 2' },
      { value: 'Option 3', label: '옵션 3' },
    ],
    onValueChanged: console.log,
  },
}

export const SingleSelectionGroupWithPlaceholder: Story = {
  args: {
    type: EnumInputType.single,
    view: EnumInputViewType.group,
    name: 'single-selection-group-with-placeholder',
    options: [
      { value: '1', label: 'SKT' },
      { value: '2', label: 'KT' },
      { value: '3', label: 'LG+' },
    ],
    placeholder: '통신사 선택',
    onValueChanged: console.log,
  },
}

export const ReadonlyMultipleSelectionListWithIndeterminatedState: Story = {
  args: {
    ...MultipleSelectionListWithIndeterminatedState.args,
    name: 'readonly-multiple-selection-list-with-indeterminated-state',
    readOnly: true,
  },
}

export const ReadOnlySingleSelectionGroup: Story = {
  args: {
    ...SingleSelectionGroup.args,
    name: 'readonly-single-selection-group',
    readOnly: true,
  },
}
