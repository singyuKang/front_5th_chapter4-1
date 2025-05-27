import { Chip } from '@nextui-org/react'
import Link from 'next/link'

interface UrlChipProp {
  title: string
  url: string
}

export const UrlChip = ({ title, url }: UrlChipProp) => {
  return (
    <Chip radius="sm" className="px-0 mx-1 opacity-80" color="primary">
      <Link href={url} target="_blank">
        <span className="text-xs">{title}</span>
      </Link>
    </Chip>
  )
}
