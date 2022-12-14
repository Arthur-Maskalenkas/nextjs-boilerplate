import React from 'react'

import styles from './styles.module.scss'

import { AtomsDefaultProps } from 'components/atoms/utils'

type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TitleProps = {
  size?: 'medium' | 'large' | 'huge'
} & AtomsDefaultProps<TitleTags>

export const Title = ({
  children,
  className,
  as: Tag = 'h1',
  size = 'large'
}:TitleProps) => {
  return (
    <Tag className={`${styles.container} ${className} ${styles[size]}`}>
      {children}
    </Tag>
  )
}