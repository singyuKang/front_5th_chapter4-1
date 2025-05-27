'use client'

import { isNotNil } from 'ramda'
import { EnumInput } from '@components/Input/EnumInput/EnumInput'

interface GlobalFooterExternalSitesProps {
  options: Array<{ value: string; label: string }>
}

export const GlobalFooterExternalSites = ({
  options,
}: GlobalFooterExternalSitesProps) => (
  <EnumInput
    type="single"
    view="group"
    name="external-sites"
    placeholder="관련사이트"
    options={options}
    selectClassName="!py-[4px] !bg-transparent !text-white rounded-full !w-[140px]"
    dropdownIconClassName="!right-[12px]"
    onValueChanged={(optionSelected) => {
      if (isNotNil(optionSelected)) {
        window.open(optionSelected.value, '_blank')
      }
    }}
  />
)
