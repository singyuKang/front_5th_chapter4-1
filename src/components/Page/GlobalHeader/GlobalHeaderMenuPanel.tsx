import { HTMLAttributes } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { isNil } from 'ramda'
import HeaderBannerBackgroundImg from '@assets/image/header/header_banner_background.png'
import { Device, HasDevice } from '@common/device/Device'

import { Text } from '@foundation/Text/Text'
import { Container } from '@/components/Container/Container'

interface GlobalHeaderMenuPanelBanner {
  title: string
  subtitle: string
  url: string
}

type GlobalHeaderMenuPanelAlign = 'left' | 'center' | 'right'

interface GlobalHeaderMenuPanelProps
  extends HasDevice,
    HTMLAttributes<HTMLDivElement> {
  active: boolean
  align: GlobalHeaderMenuPanelAlign
  onBlur?: () => void
  banner?: GlobalHeaderMenuPanelBanner
  activeTab?: string | null
  ulClassName?: string
}

const renderBanner = (device: Device, banner: GlobalHeaderMenuPanelBanner) =>
  device.isDesktop() ? (
    <Link
      href={banner.url}
      prefetch={false}
      className="block relative"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative overflow-hidden rounded-[16px] w-[270px] h-[180px] py-[36px] px-[24px]">
        <Image
          src={HeaderBannerBackgroundImg}
          alt=""
          width={270}
          height={180}
          priority={false}
          placeholder="blur"
          className="absolute inset-0 z-[-1]"
        />
        <div className="flex flex-col justify-center">
          <Text variant="caption2" color="white">
            {banner.subtitle}
          </Text>
          <Text
            variant="body1"
            color="white"
            className="pt-[16px] whitespace-pre-line"
          >
            {banner.title}
          </Text>
          <div className="pt-[16px] flex flex-row gap-x-[4px] text-white items-center">
            <Text variant="caption4" color="white">
              자세히 보기
            </Text>
            <div>{/* <ArrowRightIcon /> */}</div>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <></>
  )

const getClassNameByAlign = (align: GlobalHeaderMenuPanelAlign) => {
  switch (align) {
    case 'left':
      return 'justify-start'
    case 'center':
      return 'justify-center'
    case 'right':
      return 'justify-end'
  }
}

export const GlobalHeaderMenuPanel = ({
  id,
  active,
  activeTab,
  align,
  banner,
  onBlur,
  device: rawDevice,
  className: defaultClassName = '',
  ulClassName,
  children,
  ...props
}: GlobalHeaderMenuPanelProps) => {
  const device = Device.of(rawDevice)
  const className = [
    defaultClassName,
    'absolute left-0 right-0 bg-white z-30',
    device.map({
      desktop: () => 'top-[64px] py-[32px] drop-shadow-lg',
      mobile: () => 'top-0 pt-[24px] bottom-0',
    }),
    active ? '' : 'sr-only',
  ]
    .join(' ')
    .trim()

  const itemsWrapperClassName = [
    device.map({
      desktop: () =>
        `flex flex-row ${
          activeTab === 'tab-loan' ? 'gap-[52px]' : 'gap-[28px]'
        }`,
      mobile: () => 'flex flex-col gap-[56px] pb-[35px]',
    }),
    getClassNameByAlign(align),
  ]
    .join(' ')
    .trim()
  return (
    <section
      className={className}
      id={id}
      role="tabpanel"
      onBlur={onBlur}
      onMouseLeave={onBlur}
      {...props}
    >
      <Container device={device.name} variant="widest">
        {isNil(banner) ? (
          <ul className={`${itemsWrapperClassName} ${ulClassName}`}>
            {children}
          </ul>
        ) : (
          <div className="flex flex-row">
            <div className="grow">
              <ul className={itemsWrapperClassName}>{children}</ul>
            </div>
            <div>{renderBanner(device, banner)}</div>
          </div>
        )}
      </Container>
    </section>
  )
}
