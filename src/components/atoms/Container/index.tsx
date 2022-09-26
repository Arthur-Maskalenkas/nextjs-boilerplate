import React from 'react'

import styles from './styles.module.scss'

import { AtomsDefaultProps } from 'components/atoms/utils'

type ContainerVariations = 'default' | 'primary' | 'secondary'

export type ContainerProps = {
	id?: string
	classNameExtraContainer?: string
} & AtomsDefaultProps<ContainerVariations>

export const Container = ({ children, variant = 'default', className, id, as: Tag = 'div', classNameExtraContainer }: ContainerProps) => {
  return (
    <section
      data-component-container={true}
      id={id}
      className={`${styles.container} ${styles[variant]} ${className}`}
    >
      <Tag className={classNameExtraContainer}>
        {children}
      </Tag>
    </section>
  )
}
