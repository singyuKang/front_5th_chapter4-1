'use client'

import { NextUIProvider } from '@nextui-org/react'

export function NextUIProvders({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>
}
