export const allColors = [
  'primary',
  'secondary',
  'secondary3',
  'black',
  'gray0',
  'gray1',
  'gray2',
  'gray3',
  'gray4',
  'gray5',
  'gray6',
  'gray7',
  'gray8',
  'white',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'foreground',
] as const
type ColorTuple = typeof allColors
export type Color = ColorTuple[number]
export type ColorPalette = { [key in Color]: string }
