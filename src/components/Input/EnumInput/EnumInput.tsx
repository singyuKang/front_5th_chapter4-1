/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import {
  Fragment,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { equals, includes, isEmpty, isNotNil } from 'ramda'
import ArrowDownIcon from '@assets/icon/arrow_down.svg'
import {
  EnumInputListItem,
  EnumInputListItemProps,
} from '@components/Input/EnumInput/EnumInputListItem'
import { EnumInputType } from '@components/Input/EnumInput/EnumInputType'
import { EnumInputViewType } from '@components/Input/EnumInput/EnumInputViewType'

import { InputWrapper } from '@components/Input/InputWrapper/InputWrapper'
import { Text } from '@foundation/Text/Text'

type EnumInputOption = {
  value: string
  priority?: number
  label?: string
  element?: ReactNode
  checked?: boolean
}

type EnumInputAlign = 'vertical' | 'horizontal'

interface BaseEnumInputProps<T> extends HTMLAttributes<HTMLDivElement> {
  name: string
  type: EnumInputType
  view: EnumInputViewType
  options: EnumInputOption[]
  align?: EnumInputAlign
  placeholder?: string
  readOnly?: boolean
  enableAllChecked?: boolean
  enableIndeterminated?: boolean
  allCheckedLabel?: string
  onValueChanged?: (value: T) => void
  itemsWrapperClassName?: string
  selectClassName?: string
  dropdownIconClassName?: string
  renderAllCheckedItem?: (props: EnumInputListItemProps) => ReactNode
  renderItem?: (props: EnumInputListItemProps) => ReactNode
}
interface EnumInputSingleProps
  extends BaseEnumInputProps<EnumInputOption | null> {
  type: typeof EnumInputType.single
}

interface EnumInputMultipleProps extends BaseEnumInputProps<EnumInputOption[]> {
  type: typeof EnumInputType.multiple
}

type EnumInputProps = EnumInputSingleProps | EnumInputMultipleProps

export const EnumInput = ({
  name,
  type,
  view: viewType,
  options,
  align = 'horizontal',
  placeholder,
  readOnly = false,
  enableAllChecked = false,
  enableIndeterminated = false,
  allCheckedLabel = '모두 선택',
  onValueChanged,
  itemsWrapperClassName,
  selectClassName,
  dropdownIconClassName,
  renderAllCheckedItem,
  renderItem,
  className = '',
}: EnumInputProps) => {
  const [values, setValues] = useState<EnumInputOption[]>([])
  const [opened, setOpened] = useState<boolean>(false)

  useEffect(() => {
    const defaultValue = options.filter((option) => option.checked === true)

    if (!equals(defaultValue, values)) {
      setValues(defaultValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])

  const setValuesAndOnValueChanged = (values: EnumInputOption[]) => {
    setValues(
      type === EnumInputType.single && values.length > 1 ? [values[0]] : values
    )

    switch (type) {
      case EnumInputType.single:
        return (
          onValueChanged &&
          onValueChanged(values.length === 0 ? null : values[0])
        )
      case EnumInputType.multiple:
        return onValueChanged && onValueChanged(values)
    }
  }

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    const currentWrapperRef = wrapperRef.current
    const eventTarget = event.target
    if (
      isNotNil(currentWrapperRef) &&
      isNotNil(eventTarget) &&
      !currentWrapperRef?.contains(eventTarget as Node)
    ) {
      setOpened(() => false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  // TODO: Implement multiple input type with grouping ui (select-box)
  if (type === EnumInputType.single && viewType === EnumInputViewType.group) {
    return (
      <InputWrapper className={className} ref={wrapperRef}>
        <div className="relative">
          <div
            id={name}
            className={[
              'bg-white w-full border p-[12px] pr-[32px]',
              isEmpty(values) ? 'text-gray4' : 'text-gray2',
              selectClassName,
            ]
              .filter(isNotNil)
              .join(' ')
              .trim()}
            onClick={() => !readOnly && setOpened((opened) => !opened)}
          >
            <Text variant="body2" className="truncate">
              {values.length > 0
                ? values[0].label
                : placeholder ?? options[0].label ?? options[0].value}
            </Text>
          </div>
          <div
            className={[
              'flex justify-center items-center absolute top-0 right-[20px] bottom-0 z-10',
              dropdownIconClassName ?? '',
            ]
              .join(' ')
              .trim()}
          >
            <div
              className={[
                'h-[8px] w-[14px] text-gray5 duration-75',
                opened ? 'rotate-180' : null,
              ]
                .join(' ')
                .trim()}
              onClick={() => !readOnly && setOpened((opened) => !opened)}
            >
              {/* <ArrowDownIcon /> */}
            </div>
          </div>
          <ul
            hidden={!opened}
            className={[
              'absolute top-[52px] left-0 min-w-full flex flex-col bg-white rounded-[4px] py-[8px] drop-shadow-sm border border-gray6 z-20',
              opened ? null : 'hidden',
            ]
              .filter(isNotNil)
              .join(' ')
              .trim()}
          >
            {options.map((option, index) => {
              const selected =
                values.length >= 1 ? equals(option, values[0]) : undefined

              return (
                <li
                  key={index}
                  value={option.value}
                  onClick={(e) => {
                    setOpened(() => false)
                    if (readOnly) {
                      return
                    }
                    const value = option.value

                    const optionSelected = options.filter(
                      (option) => option.value === value
                    )
                    if (isEmpty(optionSelected)) {
                      return setValuesAndOnValueChanged([])
                    }

                    return setValuesAndOnValueChanged([optionSelected[0]])
                  }}
                  className="px-[12px] py-[4px] select-none whitespace-nowrap hover:bg-gray7"
                >
                  <Text
                    variant="body2"
                    color={selected ? 'gray0' : 'gray2'}
                    className={[
                      'whitespace-nowrap',
                      selected ? 'font-bold' : null,
                    ]
                      .filter(isNotNil)
                      .join(' ')
                      .trim()}
                  >
                    {option.label}
                  </Text>
                </li>
              )
            })}
          </ul>
        </div>
      </InputWrapper>
    )
  }

  const allCheckedInputItemProps: EnumInputListItemProps = {
    name: `${name}_all`,
    type,
    label: allCheckedLabel ?? '모두 선택하기',
    readOnly,
    checked: equals(
      [...options].sort((a, b) => a.value.localeCompare(b.value)),
      [...values].sort((a, b) => a.value.localeCompare(b.value))
    ),
    indeterminated:
      enableIndeterminated &&
      values.length > 0 &&
      values.length < options.length,
    onChanged: () =>
      values.length < options.length
        ? setValuesAndOnValueChanged(
            [...options].sort((a, b) => a.value.localeCompare(b.value))
          )
        : setValuesAndOnValueChanged([]),
    labelVariant: 'subtitle3',
    labelClassName: 'font-bold',
  }
  const allCheckedInputItem = isNotNil(renderAllCheckedItem) ? (
    renderAllCheckedItem(allCheckedInputItemProps)
  ) : (
    <div>
      <EnumInputListItem {...allCheckedInputItemProps} />
    </div>
  )
  return (
    <InputWrapper>
      {enableAllChecked && allCheckedInputItem}
      <div
        className={[
          'flex',
          align === 'vertical'
            ? 'flex-col gap-y-[16px]'
            : 'flex-row gap-x-[12px] whitespace-nowrap',
          itemsWrapperClassName ?? '',
        ]
          .join(' ')
          .trim()}
      >
        {options.map((option, index) => {
          const key = `${name}_${index}`
          const props: EnumInputListItemProps = {
            name,
            type,
            index,
            value: option.value,
            label: option.element ?? option.label ?? option.value,
            checked: includes(option)(values),
            readOnly,
            onChanged: (checked) => {
              switch (type) {
                case EnumInputType.single:
                  return checked && setValuesAndOnValueChanged([option])
                case EnumInputType.multiple:
                  return checked
                    ? setValuesAndOnValueChanged([...values, option].sort())
                    : setValuesAndOnValueChanged(
                        values.filter((value) => value !== option)
                      )
              }
            },
          }

          return isNotNil(renderItem) ? (
            <Fragment key={key}>{renderItem(props)}</Fragment>
          ) : (
            <EnumInputListItem {...props} key={key} />
          )
        })}
      </div>
    </InputWrapper>
  )
}
