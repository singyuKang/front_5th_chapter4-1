const list = 'list' as const
const group = 'group' as const

const allEnumInputViewTypes = [list, group] as const

export const EnumInputViewType = {
  list,
  group,
  _values: allEnumInputViewTypes,
}

export type EnumInputViewType = (typeof allEnumInputViewTypes)[number]
