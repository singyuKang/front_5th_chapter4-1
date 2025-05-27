const single = 'single' as const
const multiple = 'multiple' as const

const allEnumInputTypes = [single, multiple] as const

export const EnumInputType = {
  single,
  multiple,
  _values: allEnumInputTypes,
}

export type EnumInputType = (typeof allEnumInputTypes)[number]
