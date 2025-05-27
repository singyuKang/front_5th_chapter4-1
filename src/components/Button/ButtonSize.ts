export const allButtonSizes = ['md', 'sm', 'lg', 'xl'] as const
type ButtonSizes = typeof allButtonSizes
export type ButtonSize = ButtonSizes[number]
