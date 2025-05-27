import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import { stackIcons } from '@/utils/getsvgIcon'

interface StackChipProp {
  title?: string
  stackList: string[]
  size?: number
}

export const StackChip = ({ title, stackList, size = 20 }: StackChipProp) => {
  return (
    <div className="mt-2">
      {title && <span className="text-sm font-semibold"># {title}</span>}
      <div className="flex flex-row flex-wrap gap-1">
        {stackList.map((stack, index) => (
          <Tooltip key={index} content={stack}>
            <div className="flex flex-row items-center gap-1">
              <Image
                src={stackIcons[stack.toLowerCase()]}
                height={size}
                width={size}
                alt={stack}
                style={{ width: size, height: size }}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
