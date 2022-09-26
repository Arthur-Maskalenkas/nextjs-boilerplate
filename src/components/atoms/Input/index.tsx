import React, { ForwardRefRenderFunction } from 'react'

import styles from './styles.module.scss'

import { AtomsDefaultProps } from 'components/atoms/utils'

type InputVariations = 'default' | 'primary'

type InputProps = {
	icon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement> & AtomsDefaultProps<InputVariations>

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ icon, variant = 'default', className, ...props }, ref) => {
  const classNameIfHaveIcon = icon ? styles.withIcon : styles.withoutIcon

  return (
    <div data-component-input={true} className={`${styles.container} ${styles[variant]} ${className} ${classNameIfHaveIcon}`}>
      <input {...props} ref={ref}/>
      {icon && <span className={styles.icon}>{icon}</span>}
    </div>
  )
}

export const InputWithForwardRef = React.forwardRef(Input)
