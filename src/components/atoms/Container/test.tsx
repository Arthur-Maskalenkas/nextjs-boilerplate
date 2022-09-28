import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Container, ContainerProps } from '.'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (props?: Partial<ContainerProps>): SutTypes => {
  const sut = render(<Container {...props}>children</Container>)

  return {
    sut
  }
}

const getContainer = (props?: Partial<ContainerProps>) => {
  const { sut: { container } } = makeSut(props)

  return container.querySelector('[data-component-container]')
}

describe('Container', () => {
  describe('Default', () => {
    test('Should render Container correctly', () => {
      expect(getContainer()).toBeInTheDocument()
    })

    test('Should render Container with default props', () => {
      expect(getContainer()).toHaveClass('default')
      expect(getContainer()).toHaveAttribute('data-component-container', 'true')
      expect(getContainer()).toHaveTextContent('children')
    })
  })

  describe('Variations', () => {
    test('Should render Container with primary variation', () => {
      expect(getContainer({ variant: 'primary' })).toHaveClass('primary')
    })

    test('Should render Container with secondary variation', () => {
      expect(getContainer({ variant: 'secondary' })).toHaveClass('secondary')
    })
  })

  describe('Extra Container', () => {
    test('Should render children container with any tag passed', () => {
      const { sut: { container } } = makeSut({ as: 'a' })

      expect(container.querySelector('section > a')).toBeInTheDocument()
    })

    test('Should render children container with any className passed', () => {
      const { sut: { container } } = makeSut({ classNameExtraContainer: 'anyClassName' })

      expect(container.querySelector('section > div')).toHaveClass('anyClassName')
    })
  })

  test('Should render Container with id passed', () => {
    expect(getContainer({ id: 'anyId' })).toHaveAttribute('id', 'anyId')
  })
})
