import { Device, HasDevice } from '@common/device/Device'
import GlobalHeaderDesktopMenu from '@components/Page/GlobalHeader/GlobalHeaderDesktopMenu'
import GlobalHeaderMobileMenu from '@components/Page/GlobalHeader/GlobalHeaderMobileMenu'

interface GlobalHeaderMenuProps extends HasDevice {
  className?: string
}

export const GlobalHeaderMenu = ({
  device,
  className,
}: GlobalHeaderMenuProps) =>
  Device.of(device).map({
    desktop: () => <GlobalHeaderDesktopMenu />,
    mobile: () => <GlobalHeaderMobileMenu className={className} />,
  })
