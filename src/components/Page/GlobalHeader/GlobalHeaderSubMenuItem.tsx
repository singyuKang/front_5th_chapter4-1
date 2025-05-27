import Link from 'next/link'
import { isNotNil } from 'ramda'
import { Device, HasDevice } from '@common/device/Device'
import { Text } from '@foundation/Text/Text'

export interface GlobalHeaderSubMenuItemProps extends HasDevice {
  title: string
  href: string
  tabIndex?: number
  target?: string
  onFocus?: VoidFunction
  onBlur?: VoidFunction
}

export const GlobalHeaderSubMenuItem = ({
  device: rawDevice,
  title,
  href,
  target,
  tabIndex = 0,
  onFocus,
  onBlur,
}: GlobalHeaderSubMenuItemProps) => {
  const device = Device.of(rawDevice)
  const textClass = [
    'inline-block cursor-pointer hover:text-secondary hover:underline visited:text-secondary visited:underline active:text-secondary active:underline focus:text-secondary focus:underline',
    device.map({
      desktop: () => 'max-w-[148px] break-keep ',
      mobile: () => null,
    }),
  ]
    .filter(isNotNil)
    .join(' ')
    .trim()

  return (
    <Link
      href={href}
      prefetch={false}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      target={target}
    >
      <Text
        variant={device.map({
          desktop: () => 'body2',
          mobile: () => 'caption1',
        })}
        color="gray4"
        className={textClass}
      >
        {title}
      </Text>
    </Link>
  )
}
