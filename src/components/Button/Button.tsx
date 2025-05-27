'use client'

import { HTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { isNotNil } from 'ramda'
import MoreIcon from '@assets/icon/more.svg'
import { ButtonSize } from '@components/Button/ButtonSize'
import { ButtonVariant } from '@components/Button/ButtonVariant'
import { Text } from '@foundation/Text/Text'
import { TypographyVariant } from '@foundation/Text/TypographyVariant'

export type ButtonAction = 'back' | 'download'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: () => void
  action?: ButtonAction
  href?: string
  labelClassName?: string
  children: ReactNode
}

const getClassNameByVariant = (
  variant: ButtonVariant,
  disabled: boolean,
): string => {
  switch (variant) {
    case 'filled':
      return (
        'justify-center text-white ' + (disabled ? 'bg-gray5' : 'bg-primary')
      )
    case 'filledVariant':
      return 'w-full justify-start bg-primary text-white'
    case 'outlined':
      return (
        'justify-center border ' +
        (disabled ? 'border-gray5 text-gray4' : 'border-primary text-primary')
      )
    case 'text':
      return 'justify-center ' + (disabled ? 'text-gray4' : 'text-primary')
    case 'textVariant':
      return (
        'justify-center ' +
        (disabled ? 'text-gray4' : 'text-secondary font-bold')
      )
  }
}

const getClassNameBySize = (size: ButtonSize): string => {
  switch (size) {
    case 'md':
      return 'px-[16px] py-[8px]'
    case 'sm':
      return 'px-[12px] py-[6px]'
    case 'lg':
      return 'px-[24px] py-[12px]'
    case 'xl':
      return 'px-[64px] py-[14px]'
  }
}

const getVariantBySize = (size: ButtonSize): TypographyVariant => {
  switch (size) {
    case 'md':
      return 'caption2'
    case 'sm':
      return 'caption2'
    case 'lg':
      return 'caption1'
    case 'xl':
      return 'body2'
  }
}

const getBody = (
  variant: ButtonVariant,
  size: ButtonSize,
  children: ReactNode,
  labelClassName?: string,
) =>
  typeof children === 'string' ? (
    <div
      className={['flex flex-row w-full items-center', getClassNameBySize(size)]
        .join(' ')
        .trim()}
    >
      <Text
        variant={getVariantBySize(size)}
        className={[
          'grow whitespace-nowrap',
          variant === 'filledVariant' ? 'text-left' : 'text-center',

          labelClassName,
        ]
          .filter(isNotNil)
          .join(' ')
          .trim()}
      >
        {children}
      </Text>
      <div>{variant === 'filledVariant' ? <MoreIcon /> : <></>}</div>
    </div>
  ) : (
    <div className={['flex flex-row w-full items-center'].join(' ').trim()}>
      <div
        className={[
          'grow',
          variant === 'filledVariant' ? 'text-left' : 'text-center',
          getClassNameBySize(size),
          labelClassName,
        ]
          .filter(isNotNil)
          .join(' ')
          .trim()}
      >
        {children}
      </div>
    </div>
  )

export const Button = ({
  variant = 'filled',
  size = 'md',
  disabled = false,
  onClick,
  action,
  href,
  children,
  labelClassName,
  className,
  ...props
}: ButtonProps) => {
  const buttonClass = [
    className ?? null,
    getClassNameByVariant(variant, disabled),
    'flex items-center rounded-[4px]',
    disabled ? 'cursor-default opacity-40' : null,
  ]
    .filter(isNotNil)
    .join(' ')
    .trim()

  return (
    <button
      {...props}
      className={buttonClass}
      onClick={() => {
        if (!disabled) {
          onClick?.apply(this)
          if (action === 'back') {
            window.history.back()
          }
        }
      }}
    >
      {isNotNil(href) ? (
        <Link
          href={href}
          prefetch={false}
          target={
            href.includes('http') || action === 'download'
              ? '_blank'
              : undefined
          }
          className="div w-full"
        >
          {getBody(variant, size, children, labelClassName)}
        </Link>
      ) : (
        getBody(variant, size, children, labelClassName)
      )}
    </button>
  )
}
