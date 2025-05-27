import { Text } from '@/foundation/Text/Text'
import { useTheme } from 'next-themes'

interface TitleliProp {
  title?: string
  list?: string[]
  direction?: 'left' | 'right'
}

export const Titleli = ({ title, list = [] }: TitleliProp) => {
  const { theme } = useTheme()
  const bgColor = theme === 'dark' ? '#1565c0' : '#42a5f5'
  return (
    <div className="flex flex-col flex-wrap items-start justify-between">
      {title && (
        <span
          className="inline px-2 font-bold"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 66%, ${bgColor} 33%)`,
          }}
        >
          {title.toLocaleUpperCase()}
        </span>
      )}
      <div className="flex flex-col flex-1 gap-1 p-2">
        {list.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <Text
              as="span"
              variant="body2"
              className="text-sm font-semibold text-left"
            >
              · {item}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
