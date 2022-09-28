import React from 'react'

import styles from './styles.module.scss'

import { AtomsDefaultProps } from 'components/atoms/utils'

type ButtonVariations = 'default' | 'primary'
type ButtonTags = 'button' | 'a'

export type ButtonProps = {
  fullWidth?: boolean
  rounded?: 'default' | 'small'
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & AtomsDefaultProps<ButtonVariations, ButtonTags>

export const Button = ({
  children,
  fullWidth = false,
  rounded = 'default',
  className,
  variant = 'default',
  icon,
  as: Tag = 'button',
  ...props
}: ButtonProps) => {
  const roundedClass = `${rounded}Rounded`
  const iconClass = icon ? styles.withIcon : ''

  return (
    <Tag
      className={`
      ${className} 
      ${styles.container} 
      ${fullWidth && styles.fullWidth} 
      ${styles[variant]} 
      ${styles[roundedClass]} 
      ${iconClass}`}
      {...props}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </Tag>
  )
}
