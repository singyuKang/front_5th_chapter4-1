'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'
import { Spinner } from '@components/Spinner/Spinner'

type ShowProps = { size?: number; label: string | null }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const show = (props: ShowProps) => {}
type ShowFunction = typeof show
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hide = () => {}
type HideFunction = typeof hide

interface SpinnerContext {
  show: ShowFunction
  hide: HideFunction
}

export const SpinnerContext = createContext<SpinnerContext>({
  show: () => {},
  hide: () => {},
})

export const useSpinner = () => useContext(SpinnerContext)

interface SpinnerProviderProps {
  children: ReactNode
  backgroundColor?: string
  size?: number
}

interface SpinnerProviderState {
  isVisible: boolean
  size: number
  label: string | null
}

export const SpinnerProvider = ({
  size = 120,
  backgroundColor,
  children,
}: SpinnerProviderProps) => {
  const initialState = {
    isVisible: false,
    size,
    label: null,
  }
  const [state, setState] = useState<SpinnerProviderState>(initialState)

  const pathname = usePathname()

  useEffect(() => {
    setState(initialState)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const show = ({ size, label }: ShowProps) =>
    setState((prevState) => ({
      isVisible: true,
      size: size ?? prevState.size,
      label: label ?? prevState.label,
    }))
  const hide = () =>
    setState((prevState) => ({
      isVisible: false,
      size: size ?? prevState.size,
      label: prevState.label,
    }))

  return (
    <SpinnerContext.Provider value={{ show, hide }}>
      {children}
      <div
        id="spinner-wrapper"
        className={`fixed inset-0 overflow-hidden ${
          state.isVisible ? 'flex justify-center items-center' : 'hidden'
        }`}
        style={{ backgroundColor, opacity: '75%', zIndex: 100 }}
        hidden={!state.isVisible}
        onClick={() => hide()}
      >
        <Spinner
          backgroundColor={backgroundColor}
          size={state.size}
          label={state.label}
        />
      </div>
    </SpinnerContext.Provider>
  )
}
