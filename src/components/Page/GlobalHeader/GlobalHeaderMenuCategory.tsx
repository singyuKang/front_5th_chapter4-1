import { ReactNode, RefObject } from 'react'
import { Device, HasDevice } from '@common/device/Device'
import { Text } from '@foundation/Text/Text'

interface GlobalHeaderCategoryProps extends HasDevice {
  title: string
  className?: string
  children?: ReactNode
  reference?: RefObject<HTMLLIElement>
}

export const GlobalHeaderCategory = ({
  device: rawDevice,
  title,
  reference,
  className: defaultClassName,
  children,
  ...props
}: GlobalHeaderCategoryProps) => {
  const device = Device.of(rawDevice)
  const className = [
    'flex flex-col',
    device.map({
      desktop: () => 'gap-[16px] mt-[24px]',
      mobile: () => 'gap-[16px] mt-[28px]',
    }),
  ]
    .join(' ')
    .trim()

  return (
    <li {...props} ref={reference} className={defaultClassName}>
      <Text variant="subtitle3" className="whitespace-nowrap">
        {title}
      </Text>
      <ul className={className}>{children}</ul>
    </li>
  )
}
