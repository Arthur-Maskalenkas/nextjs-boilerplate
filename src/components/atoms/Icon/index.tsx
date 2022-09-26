import { IconProps as IconLibProps, ThumbsUp, List, X } from 'phosphor-react'
import { IconWeight as IconLibWeightProps } from 'phosphor-react/src/lib'
import React from 'react'

import styles from './styles.module.scss'

type IconListProps = 'thumbsUp' | 'list' | 'x'

export type IconProps = {
  icon: IconListProps
  mirrored?: boolean
  size?: number
  weight?: IconLibWeightProps
} & IconLibProps

const iconList: Record<IconListProps, (props: IconProps) => JSX.Element> = {
  thumbsUp: (props: IconProps) => {
    return <ThumbsUp alt={`${props.icon} Icon`} {...props} />
  },

  list: (props: IconProps) => {
    return <List alt={`${props.icon} Icon`} {...props} />
  },

  x: (props: IconProps) => {
    return <X alt={`${props.icon} Icon`} {...props} />
  }
}

export const Icon = ({
  icon,
  mirrored = false,
  size = 20,
  weight = 'duotone',
  className,
  ...props
}: IconProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {iconList[icon]({
        mirrored,
        size,
        icon,
        weight,
        ...props
      })}
    </div>
  )
}
