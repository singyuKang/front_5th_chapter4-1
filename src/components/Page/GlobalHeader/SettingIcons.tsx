import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function SettingIcons() {
  return (
    <div className="flex items-center gap-1">
      <ThemeSwitcher />
      <Button
        variant="bordered"
        isIconOnly
        as={'a'}
        target="_blank"
        href={'https://github.com/singyuKang'}
      >
        <AiOutlineGithub size={20} />
      </Button>
    </div>
  )
}

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      isSelected={theme === 'light'}
      onChange={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MdLightMode className={className} />
        ) : (
          <MdDarkMode className={className} />
        )
      }
    />
  )
}

import { Switch } from '@nextui-org/react'
