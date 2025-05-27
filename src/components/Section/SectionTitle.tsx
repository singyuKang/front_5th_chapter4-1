'use client'
import { Text } from '@/foundation/Text/Text'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface SectionTitleProp {
  title?: string
  subTitle?: string
}

export const CustomSectionTitle = ({ title, subTitle }: SectionTitleProp) => {
  const { theme } = useTheme()
  const [bgColor, setBgColor] = useState('#42a5f5')
  useEffect(() => {
    setBgColor(theme === 'dark' ? '#1565c0' : '#42a5f5')
  }, [theme])

  return (
    <div className="mb-4">
      {title && (
        <div
          className="inline px-2 text-2xl font-bold"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 66%, ${bgColor} 33%)`,
          }}
        >
          {title.toLocaleUpperCase()}
        </div>
      )}
      {subTitle && <Text variant="subtitle5">{subTitle} </Text>}
    </div>
  )
}
