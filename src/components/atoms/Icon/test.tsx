import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Icon, IconProps } from '.'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (props?: Partial<IconProps>): SutTypes => {
  const sut = render(<Icon icon={'thumbsUp'} {...props}/>)

  return {
    sut
  }
}

describe('Icon', () => {
  describe('Default', () => {
    test('Should render Icon correctly', () => {
      const { sut: { container } } = makeSut()

      expect(container.querySelector('svg[icon="thumbsUp"]')).toBeInTheDocument()
    })
  })

  describe('Icons Renders', () => {
    test('Should render list icon', () => {
      const { sut: { container } } = makeSut({ icon: 'list' })

      expect(container.querySelector('svg[icon="list"]')).toBeInTheDocument()
    })

    test('Should render x icon', () => {
      const { sut: { container } } = makeSut({ icon: 'x' })

      expect(container.querySelector('svg[icon="x"]')).toBeInTheDocument()
    })
  })
})
