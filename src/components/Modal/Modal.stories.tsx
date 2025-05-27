import type { Meta, StoryObj } from '@storybook/react'
import { Device } from '@common/device/Device'
import { Button } from '@components/Button/Button'
import { ModalProvider, useModalContext } from '@components/Modal/ModalProvider'
import { Text } from '@foundation/Text/Text'
import { Modal, ModalProps } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Component/Modal',
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    id: 'modal-default',
    device: Device.desktop,
    onClickClose: () => alert('닫기 버튼을 누르셨습니다'),
    children: (
      <>
        <Text variant="subtitle2" as="h2">
          Title
        </Text>
        <Text variant="body2" as="p" className="mt-2">
          Contents
        </Text>
      </>
    ),
  },
}

const WithActionChild = (props: ModalProps) => {
  const { Modal, open, close } = useModalContext()
  const id = 'modal-with-action'

  return (
    <Button
      variant="filled"
      size="lg"
      onClick={() =>
        open(id, <Modal {...props} onClickClose={() => close(id)} />)
      }
    >
      Click to open modal
    </Button>
  )
}

export const WithAction: Story = {
  args: {
    device: Device.desktop,
    children: (
      <>
        <Text variant="subtitle2" as="h2">
          Modal with action
        </Text>
        <Text variant="body2" as="p" className="mt-2">
          클릭하면 모달이 닫힙니다
        </Text>
        <Text variant="body2" as="p" className="mt-2">
          바깥 어두운 영역을 클릭하면 모달이 닫힙니다
        </Text>
      </>
    ),
  },
  render: (modalProps) => {
    return (
      <ModalProvider>
        <WithActionChild {...modalProps} />
      </ModalProvider>
    )
  },
}

const ShouldCloseOnOutsideClickChild = (props: ModalProps) => {
  const { Modal, open, close } = useModalContext()
  const id = 'modal-should-close-on-outside-click'

  return (
    <Button
      variant="filled"
      size="lg"
      onClick={() =>
        open(id, <Modal {...props} onClickClose={() => close(id)} />, {
          shouldCloseOnOutsideClick: false,
        })
      }
    >
      Click to open modal
    </Button>
  )
}

export const ShouldCloseOnOutsideClick: Story = {
  args: {
    children: (
      <>
        <Text variant="subtitle2" as="h2">
          Modal with action
        </Text>
        <Text variant="body2" as="p" className="mt-2">
          클릭하면 모달이 닫힙니다
        </Text>
        <Text variant="body2" as="p" className="mt-2">
          바깥 어두운 영역을 클릭해도 모달이 닫히지 않습니다.
        </Text>
      </>
    ),
  },
  render: (modalProps) => {
    return (
      <ModalProvider>
        <ShouldCloseOnOutsideClickChild {...modalProps} />
      </ModalProvider>
    )
  },
}
