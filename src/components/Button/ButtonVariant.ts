export const allButtonVariants = [
  'filled',
  'filledVariant',
  'outlined',
  'text',
  'textVariant',
] as const
type ButtonVariants = typeof allButtonVariants
export type ButtonVariant = ButtonVariants[number]
