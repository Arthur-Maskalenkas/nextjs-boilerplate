import { IconProps as IconLibProps, ThumbsUp } from 'phosphor-react'
import { IconWeight as IconLibWeightProps } from 'phosphor-react/src/lib'
import React from 'react'

import styles from './styles.module.scss'

type IconListProps = 'thumbsUp'

export type IconProps = {
  icon: IconListProps
  mirrored?: boolean
  size?: number
  weight?: IconLibWeightProps
} & IconLibProps

const iconList: Record<IconListProps, (props: IconProps) => JSX.Element> = {
  thumbsUp: (props: IconProps) => {
    return <ThumbsUp alt={`${props.icon} Icon`} {...props} />
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
