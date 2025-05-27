/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'
import { Modal } from '@components/Modal/Modal'

interface ModalOption {
  shouldCloseOnOutsideClick?: boolean
}

const VoidFunction = () => {}
const OpenFunction = (
  key: string,
  element: ReactElement,
  option?: ModalOption
) => {}
type OpenFunction = typeof OpenFunction
const CloseFunction = (key: string) => {}
type CloseFunction = typeof CloseFunction

interface ModalContext {
  Modal: typeof Modal
  open: OpenFunction
  close: CloseFunction
  clickOutside: VoidFunction
}

export const ModalContext = createContext<ModalContext>({
  Modal,
  open: VoidFunction,
  close: VoidFunction,
  clickOutside: VoidFunction,
})

export const useModalContext = () => useContext(ModalContext)

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState<
    { key: string; element: ReactElement; option: ModalOption }[]
  >([])
  const open = useCallback<OpenFunction>(
    (key, element, option = { shouldCloseOnOutsideClick: true }) => {
      const modalsUpdated = [
        ...modals.filter((modal) => modal.key !== key),
        { key, element, option },
      ]
      return setModals(modalsUpdated)
    },
    [modals, setModals]
  )
  const close = useCallback<CloseFunction>(
    (key: string) => {
      const modalsUpdated = modals.filter((modal) => modal.key !== key)
      return setModals(modalsUpdated)
    },
    [modals, setModals]
  )

  const clickOutside = useCallback<VoidFunction>(() => {
    const modalsUpdated = modals.filter(
      ({ option }) => !option.shouldCloseOnOutsideClick
    )
    return setModals(modalsUpdated)
  }, [modals, setModals])

  const pathname = usePathname()

  useEffect(() => {
    setModals([])
  }, [pathname])

  return (
    <ModalContext.Provider value={{ Modal, open, close, clickOutside }}>
      {children}
      <div
        id="modal-wrapper"
        className={`fixed inset-0 z-40 overflow-hidden bg-black bg-opacity-80 ${
          modals.length === 0 ? 'hidden' : 'flex justify-center items-center'
        }`}
        hidden={modals.length === 0}
        onClick={() => {
          clickOutside()
        }}
      >
        {modals.map((modal) =>
          cloneElement(modal.element, {
            key: modal.key,
            onClickClose: () => close(modal.key),
          })
        )}
      </div>
    </ModalContext.Provider>
  )
}
