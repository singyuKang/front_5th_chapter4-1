import { Modal, ModalProps } from '@components/Modal/Modal'

interface AlertModalButtonProps {
  label: string
  onClick: VoidFunction
}

export interface AlertModalProps extends ModalProps {
  button: AlertModalButtonProps
}

export const AlertModal = ({
  button: { label, onClick },
  ...props
}: AlertModalProps) => (
  <Modal buttons={[{ label, variant: 'filled', onClick }]} {...props} />
)
