import { AllHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface TypographyProps
  extends AllHTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  component?: `h${1 | 2 | 3 | 4 | 5 | 6}` | 'p' | 'span'
  as?: Exclude<TypographyProps['component'], 'p' | 'span'>
  fontSize?: string
}

export const Typography = ({
  component: Component = 'h1',
  className,
  as = 'h2',
  children,
  fontSize,
  ...props
}: TypographyProps) => {
  const sizes: Record<NonNullable<TypographyProps['as']>, string> = {
    h1: '4xl',
    h2: '3xl',
    h3: 'xl',
    h4: 'lg',
    h5: 'base',
    h6: 'sm',
  }

  return (
    <Component
      className={clsx(`text-${fontSize ?? sizes[as]}`, className)}
      {...props}
    >
      {children}
    </Component>
  )
}
