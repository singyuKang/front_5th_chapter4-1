import { HTMLAttributes } from 'react'
import { isNotNil } from 'ramda'
import { Color, ColorPalette } from './Color'

interface ColoredBoxProps extends HTMLAttributes<unknown> {
  textColor?: Color
  backgroundColor?: Color
  as?: keyof JSX.IntrinsicElements
}

// ref: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const BackgroundColorMap: ColorPalette = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  secondary3: 'bg-secondary3',
  black: 'bg-black',
  gray0: 'bg-gray0',
  gray1: 'bg-gray1',
  gray2: 'bg-gray2',
  gray3: 'bg-gray3',
  gray4: 'bg-gray4',
  gray5: 'bg-gray5',
  gray6: 'bg-gray6',
  gray7: 'bg-gray7',
  gray8: 'bg-gray8',
  white: 'bg-white',
  red: 'bg-red',
  orange: 'bg-orange',
  yellow: 'bg-yellow',
  green: 'bg-green',
}

const TextColorMap: ColorPalette = {
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
}

export const ColoredBox = (props: ColoredBoxProps) => {
  const { textColor, backgroundColor, as, className, children, ...textProps } =
    props
  const DynamicTag = as ?? 'span'
  const textClassName = [
    textColor ? TextColorMap[textColor] : null,
    backgroundColor ? BackgroundColorMap[backgroundColor] : null,
    className,
  ]
    .filter(isNotNil)
    .join(' ')
  return (
    <DynamicTag className={textClassName} {...textProps}>
      {children}
    </DynamicTag>
  )
}
