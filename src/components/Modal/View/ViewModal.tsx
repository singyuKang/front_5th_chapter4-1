import { Modal, ModalProps } from '@components/Modal/Modal'

interface ViewModalButtonProps {
  label: string
  onClick: VoidFunction
}

export interface ViewModalProps extends ModalProps {
  button: ViewModalButtonProps
}

export const ViewModal = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  button: { label, onClick },
  ...props
}: ViewModalProps) => (
  <Modal className="max-w-[958px] max-h-full px-[100px] py-[30px]" {...props} />
)
