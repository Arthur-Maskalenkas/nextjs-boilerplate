import { IconProps as IconLibProps, ThumbsDown, ThumbsUp } from 'phosphor-react'
import { IconWeight as IconLibWeightProps } from 'phosphor-react/src/lib'
import React from 'react'

type IconListProps = 'thumbsUp' | 'thumbsDown'

export type IconProps = {
  icon: IconListProps
  mirrored?: boolean
  size?: number
  weight?: IconLibWeightProps
  dataNameCustom?: string
} & IconLibProps

const iconList: Record<IconListProps, (props: IconProps) => JSX.Element> = {
  thumbsUp: (props: IconProps) => {
    return <ThumbsUp alt={`${props.icon} Icon`} {...props} />
  },

  thumbsDown: (props: IconProps) => {
    return <ThumbsDown alt={`${props.icon} Icon`} {...props} />
  }
}

export const Icon = ({
  icon,
  mirrored = false,
  size = 20,
  weight = 'duotone',
  dataNameCustom = 'default',
  ...props
}: IconProps) => {
  const dataNameComponent = {
    [`data-component-icon-${icon.toLowerCase()}`]: true,
    [`data-component-icon-${dataNameCustom.toLowerCase()}`]: true
  }

  return (
    <div {...dataNameComponent} >
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
