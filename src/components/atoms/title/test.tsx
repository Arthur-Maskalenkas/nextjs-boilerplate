import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'

import { Title, TitleProps } from '.'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (props?: Partial<TitleProps>): SutTypes => {
  const sut = render(<Title {...props}>children</Title>)

  return {
    sut
  }
}

describe('Title', () => {
  describe('Default', () => {
    test('Should render Title correctly', () => {
      makeSut()

      expect(screen.getByText(/children/i)).toBeInTheDocument()
    })

    test('Should render Title with size large', () => {
      const { sut: { container } } = makeSut()

      expect(container.querySelector('[data-component-title].large')).toBeInTheDocument()
    })

    test('Should render Title with tag H1', () => {
      const { sut: { container } } = makeSut()

      expect(container.querySelector('h1')).toHaveTextContent('children')
    })
  })

  describe('Variations', () => {
    test('Should render Title with size medium', () => {
      const { sut: { container } } = makeSut({ size: 'medium' })

      expect(container.querySelector('[data-component-title].medium')).toBeInTheDocument()
    })

    test('Should render Title with size huge', () => {
      const { sut: { container } } = makeSut({ size: 'huge' })

      expect(container.querySelector('[data-component-title].huge')).toBeInTheDocument()
    })

    test('Should render Title with tag H2', () => {
      const { sut: { container } } = makeSut({ as: 'h2' })

      expect(container.querySelector('h2')).toHaveTextContent('children')
    })

    test('Should render Title with tag H3', () => {
      const { sut: { container } } = makeSut({ as: 'h3' })

      expect(container.querySelector('h3')).toHaveTextContent('children')
    })

    test('Should render Title with tag H4', () => {
      const { sut: { container } } = makeSut({ as: 'h4' })

      expect(container.querySelector('h4')).toHaveTextContent('children')
    })

    test('Should render Title with tag H5', () => {
      const { sut: { container } } = makeSut({ as: 'h5' })

      expect(container.querySelector('h5')).toHaveTextContent('children')
    })

    test('Should render Title with tag H6', () => {
      const { sut: { container } } = makeSut({ as: 'h6' })

      expect(container.querySelector('h6')).toHaveTextContent('children')
    })
  })
})
