import { ReactNode } from 'react'

export type AtomsDefaultProps<VariantType = void, TagType = keyof HTMLElementTagNameMap> = {
	as?: TagType
	className?: string
	children?: ReactNode
	variant?: VariantType
}
