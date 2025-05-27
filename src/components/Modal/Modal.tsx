import { HTMLAttributes } from 'react'
import CloseIcon from '@assets/icon/close.svg'
import { Device, HasDevice } from '@common/device/Device'
import { Button } from '@components/Button/Button'
import { ButtonVariant } from '@components/Button/ButtonVariant'
import Image from 'next/image'

export interface ModalButtonProps {
  variant: ButtonVariant
  label: string
  onClick: VoidFunction
  disabled?: boolean
  className?: string
}

export type ModalVariant = 'default' | 'wide'

export interface ModalProps extends HasDevice, HTMLAttributes<HTMLDivElement> {
  variant?: ModalVariant
  showCloseButton?: boolean
  onClickClose?: VoidFunction
  buttons?: ModalButtonProps[]
}

export const Modal = ({
  id,
  device,
  variant = 'default',
  className: defaultClassName,
  buttons,
  children: body,
  showCloseButton = false,
  onClickClose,
  ...props
}: ModalProps) => {
  const className = [
    defaultClassName ?? '',
    'relative z-50',
    'w-full min-w-[280px]',
    variant === 'wide' ? ' max-w-[640px]' : 'max-w-[280px]',
    Device.of(device).map({
      desktop: () => 'max-h-[640px]',
      mobile: () => 'max-h-[520px]',
    }),
    'mx-[20px]',
    'bg-white rounded-lg',
    'flex flex-col',
  ]
    .join(' ')
    .trim()

  return (
    <article
      {...props}
      id={id}
      className={className}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {showCloseButton && (
        <div className="text-right pt-[20px] pr-[20px]">
          <div
            className="inline-block"
            onClick={onClickClose ? onClickClose : () => null}
          >
            <div className="flex w-[32px] h-[32px] justify-center items-center">
              <div className="w-[16px] h-[16px] ">
                <Image src={CloseIcon} alt="" height={30} width={30} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={[
          'grow px-[24px] pb-[8px]',
          showCloseButton ? 'pt-[12px]' : 'pt-[24px]',
          'text-black',
        ]
          .join(' ')
          .trim()}
      >
        {body}
      </div>

      {buttons && buttons.length > 0 && (
        <div className="pt-[16px] pb-[24px] px-[24px] flex flex-row gap-x-[8px] justify-center">
          {buttons.map((button, idx) => (
            <Button
              key={idx}
              variant={button.variant}
              size="md"
              className={['w-full', button.className ?? ''].join(' ').trim()}
              onClick={button.onClick}
              disabled={button.disabled}
            >
              {button.label}
            </Button>
          ))}
        </div>
      )}
    </article>
  )
}
