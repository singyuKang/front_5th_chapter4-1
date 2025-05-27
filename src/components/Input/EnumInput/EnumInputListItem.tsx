/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'

import { ChangeEventHandler, ReactNode, useEffect, useRef } from 'react'
import { isNotNil } from 'ramda'
import { EnumInputType } from '@components/Input/EnumInput/EnumInputType'
import { Text } from '@foundation/Text/Text'
import { TypographyVariant } from '@foundation/Text/TypographyVariant'

export interface EnumInputListItemProps {
  idPrefix?: string
  name: string
  type: EnumInputType
  label: ReactNode
  index?: number
  value?: string
  labelVariant?: TypographyVariant
  labelClassName?: string
  disabled?: boolean
  readOnly?: boolean
  checked?: boolean
  indeterminated?: boolean
  onClick?: () => void
  onChanged?: (value: boolean) => void
}

export const EnumInputListItem = ({
  idPrefix,
  name,
  type,
  label,
  index = 0,
  value = '',
  labelVariant = 'caption1',
  labelClassName = '',
  disabled,
  readOnly,
  checked = false,
  indeterminated = false,
  onClick,
  onChanged,
}: EnumInputListItemProps) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const current = ref.current
    if (isNotNil(current)) {
      current.indeterminate = indeterminated
    }
  }, [indeterminated, ref])

  const id = `${idPrefix ?? ''}_enum-input_${name}_${index}`
  const onChange: ChangeEventHandler<HTMLInputElement> = () => {
    onChanged && onChanged(!checked)
  }

  return (
    <div className="flex flex-row items-center">
      <div className="flex items-center justify-center">
        <input
          ref={ref}
          id={id}
          name={name}
          type={type === EnumInputType.multiple ? 'checkbox' : 'radio'}
          value={value}
          onClick={() => {
            onClick && onClick()

            if (!(disabled ?? readOnly)) {
              if (ref.current) {
                ref.current.checked = !checked
              }
            }
          }}
          aria-readonly={readOnly}
          checked={checked}
          onChange={(event) => {
            if (!(disabled ?? readOnly)) {
              onChange && onChange(event)
            }
          }}
          className={[
            'relative appearance-none w-[20px] h-[20px]',
            'before:pointer-events-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-[20px] before:h-[20px] before:border before:border-gray5',
            type === EnumInputType.multiple
              ? 'before:rounded-[4px]'
              : 'before:rounded-full',
            'checked:before:bg-transparent checked:before:border-primary checked:after:border-0',
            type === EnumInputType.multiple
              ? `checked:after:content-checked checked:after:bg-primary checked:after:rounded-[4px] checked:after:absolute checked:after:top-0 checked:after:right-0 checked:after:bottom-0 checked:after:left-0 checked:after:flex checked:after:justify-center checked:after:items-end`
              : 'checked:before:border-[1.5px] checked:after:absolute checked:after:top-[4px] checked:after:left-[4px] checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-full checked:after:bg-secondary',
            indeterminated
              ? 'indeterminate:before:bg-black indeterminate:before:border-0  indeterminate:after:inline-block indeterminate:after:bg-white indeterminate:after:absolute indeterminate:after:w-[12px] indeterminate:after:h-[1px] indeterminate:after:top-[9px] indeterminate:after:left-[4px]'
              : '',
          ]
            .join(' ')
            .trim()}
        />
      </div>
      <div className="grow">
        <label htmlFor={id} className="block pl-[8px]">
          {typeof label === 'string' ? (
            <Text variant={labelVariant} className={labelClassName}>
              {label ?? value}
            </Text>
          ) : (
            label
          )}
        </label>
      </div>
    </div>
  )
}
