import type { Meta, StoryObj } from '@storybook/react'
import { Device } from '@common/device/Device'
import { Button } from '@components/Button/Button'
import { ModalProvider, useModalContext } from '@components/Modal/ModalProvider'
import { Text } from '@foundation/Text/Text'
import { AlertModal, AlertModalProps } from './AlertModal'

const meta: Meta<typeof AlertModal> = {
  title: 'Component/Modal/Alert',
  component: AlertModal,
}

export default meta

type Story = StoryObj<typeof AlertModal>

export const Default: Story = {
  args: {
    id: 'alert-modal-default',
    device: Device.desktop,
    button: {
      label: '확인',
      onClick: () => alert('확인 버튼을 누르셨습니다'),
    },
    onClickClose: () => alert('닫기 버튼을 누르셨습니다'),
    children: (
      <Text variant="body2" as="p">
        알림, 경고 창 역할을 하고 버튼이 하나인 모달입니다
      </Text>
    ),
  },
}

const WithActionChild = (props: AlertModalProps) => {
  const { open, close } = useModalContext()
  const id = 'alert-modal-with-action'

  return (
    <Button
      variant="filled"
      size="lg"
      onClick={() =>
        open(
          id,
          <AlertModal
            {...props}
            button={{ label: '확인', onClick: () => close(id) }}
          />,
          { shouldCloseOnOutsideClick: true },
        )
      }
    >
      알림 모달 열기
    </Button>
  )
}

export const WithAction: Story = {
  args: {
    device: Device.desktop,
    children: (
      <Text variant="body2" as="p">
        확인을 클릭하면 모달이 닫힙니다
      </Text>
    ),
  },
  render: (alertModalProps) => {
    return (
      <ModalProvider>
        <WithActionChild {...alertModalProps} />
      </ModalProvider>
    )
  },
}
