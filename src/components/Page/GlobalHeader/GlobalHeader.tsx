'use client'
import { HTMLAttributes, useState } from 'react'
import { Device, HasDevice } from '@common/device/Device'
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import SettingIcons from './SettingIcons'
import { Text } from '@/foundation/Text/Text'

interface GlobalHeaderProps extends HasDevice, HTMLAttributes<HTMLDivElement> {}

export const GlobalHeader = ({
  device: rawDevice,
  className: defaultClassName,
  ...props
}: GlobalHeaderProps) => {
  const device = Device.of(rawDevice)
  const className = [
    device.map({
      desktop: () => 'fixed top-0 left-0 right-0 z-20',
      mobile: () => 'fixed top-0 left-0 right-0 z-20',
    }),
    defaultClassName ?? '',
  ]
    .join(' ')
    .trim()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const LinkList = [
    'Experience',
    'Project',
    'Activity',
    'Blog',
    'Certificate',
    'Education',
  ]

  return (
    <>
      <header {...props} className={className}>
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          shouldHideOnScroll
          isBordered
        >
          <NavbarContent
            className="sm:hidden"
            justify="start"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <NavbarMenuToggle />
          </NavbarContent>
          <NavbarBrand className="flex  justify-center h-full">
            <Text as="h2" variant="subtitle4" color="foreground">
              KANG SIN GYU
            </Text>
          </NavbarBrand>
          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            {LinkList.map((link) => (
              <NavbarItem key={link}>
                <Link
                  color="foreground"
                  className="text-subtitle4"
                  href={`#${link}`}
                >
                  {link}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <SettingIcons />
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {LinkList.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full text-subtitle4"
                  color="foreground"
                  href={`#${item}`}
                  size="lg"
                  onPress={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </header>
    </>
  )
}
