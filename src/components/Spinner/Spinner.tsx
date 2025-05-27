import { isNotNil } from 'ramda'
import { Text } from '@foundation/Text/Text'
import styles from './Spinner.module.css'

export interface SpinnerProps {
  label: string | null
  size?: number
  backgroundColor?: string
}

interface CustomCSSProperties extends React.CSSProperties {
  '--background-color'?: string
}

export const Spinner = ({
  label,
  size = 96,
  backgroundColor,
}: SpinnerProps) => (
  <div className="flex flex-col gap-y-[16px] items-center">
    <div
      className={styles.spinner}
      style={
        {
          width: size,
          height: size,
          '--background-color': backgroundColor,
        } as CustomCSSProperties
      }
    />
    {isNotNil(label) && (
      <Text variant="subtitle2" color="white">
        {label}
      </Text>
    )}
  </div>
)
