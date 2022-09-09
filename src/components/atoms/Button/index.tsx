import React from 'react'
import styles from './styles.module.scss'

export type ButtonProps = {
  children: React.ReactNode
  variation?: 'default' | 'primary'
  fullWidth?: boolean
  rounded?: 'default' | 'small'
  dataNameCustom?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  variation = 'default',
  fullWidth = false,
  rounded = 'default',
  dataNameCustom = 'default',
  ...props
}: ButtonProps) => {
  const roundedClass = `${rounded}Rounded`

  const dataNameComponent = {
    [`data-component-button-${dataNameCustom.toLowerCase()}`]: true
  }

  return (
    <button
      {...dataNameComponent}
      className={`${styles.container} ${fullWidth && styles.fullWidth} ${styles[variation]} ${styles[roundedClass]}`}
      {...props}>
      {children}
    </button>
  )
}
