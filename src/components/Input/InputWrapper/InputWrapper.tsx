import { forwardRef, Fragment, HTMLAttributes, ReactNode } from 'react'
import { isEmpty } from 'ramda'

type InputWrapperAdornmentPosition = 'start' | 'end'
export interface InputWrapperAdornmentProps {
  position: InputWrapperAdornmentPosition
  child: ReactNode
}

interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
  adornments?: InputWrapperAdornmentProps[]
  label?: ReactNode
  caption?: ReactNode
  childWrapperClassName?: string
}

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  (
    {
      adornments = [],
      label,
      caption,
      childWrapperClassName,
      children,
      ...inputBaseProps
    }: InputWrapperProps,
    ref
  ) => (
    <div {...inputBaseProps} ref={ref}>
      {label}
      <div
        className={['flex flex-row items-center', childWrapperClassName ?? '']
          .join(' ')
          .trim()}
      >
        {isEmpty(
          adornments.filter((adornment) => adornment.position === 'start')
        ) ? (
          <></>
        ) : (
          <div className="w-[12px]" />
        )}
        {adornments
          .filter((adornment) => adornment.position === 'start')
          .map((i, idx) => (
            <Fragment key={idx}>{i.child}</Fragment>
          ))}
        <div className="grow">{children}</div>
        {adornments
          .filter((adornment) => adornment.position === 'end')
          .map((i, idx) => (
            <Fragment key={idx}>{i.child}</Fragment>
          ))}
        {isEmpty(
          adornments.filter((adornment) => adornment.position === 'end')
        ) ? (
          <></>
        ) : (
          <div className="w-[12px]" />
        )}
      </div>
      {caption}
    </div>
  )
)

InputWrapper.displayName = 'InputWrapper'
