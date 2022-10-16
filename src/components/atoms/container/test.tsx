import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'

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

const get = {
  container: () => screen.getByTestId('component-container')
}

describe('Container', () => {
  describe('Default', () => {
    test('Should render Container correctly', () => {
      makeSut()

      expect(get.container()).toBeInTheDocument()
    })

    test('Should render Container with default props', () => {
      makeSut()

      expect(get.container()).toHaveClass('default')
      expect(get.container()).toHaveTextContent('children')
    })
  })

  describe('Variations', () => {
    test('Should render Container with primary variation', () => {
      makeSut({ variant: 'primary' })

      expect(get.container()).toHaveClass('primary')
    })

    test('Should render Container with secondary variation', () => {
      makeSut({ variant: 'secondary' })

      expect(get.container()).toHaveClass('secondary')
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
    makeSut({ id: 'anyId' })

    expect(get.container()).toHaveAttribute('id', 'anyId')
  })
})