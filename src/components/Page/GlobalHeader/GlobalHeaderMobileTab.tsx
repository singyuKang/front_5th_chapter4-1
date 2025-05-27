import { HTMLAttributes } from 'react'
import { Text } from '@foundation/Text/Text'

interface GlobalHeaderMobileTabProps extends HTMLAttributes<HTMLElement> {
  active: boolean
}

export const GlobalHeaderMobileTab = ({
  active,
  className = '',
  children,
  ...props
}: GlobalHeaderMobileTabProps) => (
  <li
    {...props}
    className={`${className} flex flex-row gap-[16px] items-center cursor-pointer`.trim()}
  >
    <div className={`w-[4px] h-[32px] ${active ? 'bg-secondary' : ''}`} />
    <Text
      variant="body2"
      tabIndex={0}
      as="a"
      color={active ? 'secondary' : 'gray2'}
    >
      {children}
    </Text>
  </li>
)
