import { HTMLAttributes } from 'react'
import { isNotNil } from 'ramda'
import { Device, HasDevice } from 'src/modules/common/device/Device'

export type ContainerVariant = 'wide' | 'widest' | 'default'
interface ContainerProps extends HasDevice, HTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariant
}

const getDesktopWidth = (variant: ContainerVariant) => {
  switch (variant) {
    case 'widest':
      return 'w-[1190px]'
    case 'wide':
      return 'w-[1080px]' // old value: 880px
    default:
      return ''
  }
}

const getClassNameByDevice = (device: Device, variant: ContainerVariant) =>
  device.map({
    desktop: () => ['mx-auto', getDesktopWidth(variant)].join(' ').trim(),
    mobile: () => 'w-full px-[16px]',
  })

export const Container = ({
  device: rawDevice,
  variant = 'wide',
  className: defaultClassName,
  ...props
}: ContainerProps) => {
  const device = Device.of(rawDevice)
  const className = [getClassNameByDevice(device, variant), defaultClassName]
    .filter(isNotNil)
    .join(' ')
    .trim()
  return <div {...props} className={className} />
}
