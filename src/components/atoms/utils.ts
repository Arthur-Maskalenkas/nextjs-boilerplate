import { ReactNode } from 'react'

export type AtomsDefaultProps<VariantType = 'default', TagType = keyof HTMLElementTagNameMap> = {
	as?: TagType
	className?: string
	children?: ReactNode
	variant?: VariantType
}