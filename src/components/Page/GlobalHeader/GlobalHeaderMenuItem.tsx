'use client'

import { cloneElement, ReactElement, useState } from 'react'
import Link from 'next/link'
import { isEmpty, isNotNil } from 'ramda'
import ArrowDownIcon from '@assets/icon/arrow_down.svg'
import ArrowUpIcon from '@assets/icon/arrow_up.svg'
import { Device, HasDevice } from '@common/device/Device'
import { type GlobalHeaderSubMenuItemProps } from '@components/Page/GlobalHeader/GlobalHeaderSubMenuItem'
import { Text } from '@foundation/Text/Text'
import './GlobalHeaderMenuItem.css'

interface GlobalHeaderMenuItemProps extends HasDevice {
  title: string
  onFocus?: () => void
  onBlur?: () => void
  menuNameClass?: string
  href?: string
  tabIndex?: number
  target?: string
  children?:
    | ReactElement<GlobalHeaderSubMenuItemProps>
    | Array<ReactElement<GlobalHeaderSubMenuItemProps>>
}

const getChild = (device: Device, text: string, textClass: string) => (
  <Text
    variant={device.map({ desktop: () => 'body2', mobile: () => 'body2' })}
    color={device.map({ desktop: () => 'gray4', mobile: () => 'gray3' })}
    className={textClass}
  >
    {text}
  </Text>
)
export const GlobalHeaderMenuItem = ({
  device: rawDevice,
  onFocus,
  onBlur,
  href,
  title,
  tabIndex = 0,
  children,
  target,
  menuNameClass,
}: GlobalHeaderMenuItemProps) => {
  const [active, setActive] = useState(false)
  const device = Device.of(rawDevice)
  const textClass = `inline-block cursor-pointer whitespace-pre visited:text-secondary  active:text-secondary  focus:text-secondary  header-hover-animation ${menuNameClass}`
  const subMenuItems: Array<ReactElement<GlobalHeaderSubMenuItemProps>> = []
  if (isNotNil(children)) {
    if (Array.isArray(children)) {
      subMenuItems.push(...children)
    } else {
      subMenuItems.push(children)
    }
  }

  return (
    <li>
      <div
        className="flex flex-row items-center"
        onClick={() => !isEmpty(subMenuItems) && setActive(!active)}
      >
        <div className="grow">
          {isNotNil(href) ? (
            <Link
              href={href}
              onFocus={onFocus}
              onBlur={onBlur}
              tabIndex={tabIndex}
              prefetch={false}
              target={target}
            >
              {getChild(device, title, textClass)}
            </Link>
          ) : (
            <a
              tabIndex={tabIndex}
              onClick={() => {
                if (device.isDesktop()) {
                  setActive((active) => !active)
                }
              }}
              onFocus={() => {
                onFocus?.apply(this)
              }}
              onBlur={() => {
                onBlur?.apply(this)
              }}
            >
              {getChild(device, title, textClass)}
            </a>
          )}
        </div>

        <div className=" h-[8px]">
          {!isEmpty(subMenuItems) && (
            <div className="h-[8px]">
              {active ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </div>
          )}
        </div>
      </div>

      {!isEmpty(subMenuItems) && (
        <ul
          className={[
            'pt-[16px] flex flex-col gap-y-[12px]',
            active ? null : 'sr-only',
          ]
            .filter(isNotNil)
            .join(' ')
            .trim()}
        >
          {subMenuItems.map((item, idx) => (
            <li key={idx}>
              {cloneElement(item, {
                onFocus: () => {
                  item.props.onFocus?.apply(this)
                },
                onBlur: () => {
                  item.props.onBlur?.apply(this)
                },
              })}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
