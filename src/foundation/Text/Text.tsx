import { HTMLAttributes } from 'react'
import { Color, ColorPalette } from '@foundation/Color/Color'
import { TypographyVariant } from '@foundation/Text/TypographyVariant'

interface TextProps extends HTMLAttributes<unknown> {
  variant?: TypographyVariant
  color?: Color
  as?: keyof JSX.IntrinsicElements
}

// ref: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const VariantClassMap: { [variant in TypographyVariant]: string } = {
  headline1: 'text-headline1',
  headline2: 'text-headline2',
  headline3: 'text-headline3',
  subtitle1: 'text-subtitle1',
  subtitle2: 'text-subtitle2',
  subtitle3: 'text-subtitle3',
  subtitle4: 'text-subtitle4',
  subtitle5: 'text-subtitle5',
  body1: 'text-body1',
  body2: 'text-body2',
  caption1: 'text-caption1',
  caption2: 'text-caption2',
  caption3: 'text-caption3',
  caption4: 'text-caption4',
}

const ColorClassMap: ColorPalette = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  secondary3: 'text-secondary3',
  black: 'text-black',
  gray0: 'text-gray0',
  gray1: 'text-gray1',
  gray2: 'text-gray2',
  gray3: 'text-gray3',
  gray4: 'text-gray4',
  gray5: 'text-gray5',
  gray6: 'text-gray6',
  gray7: 'text-gray7',
  gray8: 'text-gray8',
  white: 'text-white',
  red: 'text-red',
  orange: 'text-orange',
  yellow: 'text-yellow',
  green: 'text-green',
  blue: 'text-blue',
  foreground: 'foreground',
}

export const Text = (props: TextProps) => {
  const {
    variant = 'body1',
    color,
    as,
    className = '',
    children,
    ...textProps
  } = props
  const DynamicTag = as ?? 'div'
  const textClassName = [
    className ?? '',
    'font-primary',
    VariantClassMap[variant],
    color ? ColorClassMap[color] : '',
  ]
    .join(' ')
    .trim()
  return (
    <DynamicTag className={textClassName} {...textProps}>
      {children}
    </DynamicTag>
  )
}
