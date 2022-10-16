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
      makeSut()

      expect(screen.getByRole('heading')).toHaveClass('large')
    })

    test('Should render Title with tag H1', () => {
      makeSut()

      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })
  })

  describe('Variations', () => {
    test('Should render Title with size medium', () => {
      makeSut({ size: 'medium' })

      expect(screen.getByRole('heading')).toHaveClass('medium')
    })

    test('Should render Title with size huge', () => {
      makeSut({ size: 'huge' })

      expect(screen.getByRole('heading')).toHaveClass('huge')
    })

    test('Should render Title with tag H2', () => {
      makeSut({ as: 'h2' })

      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    test('Should render Title with tag H3', () => {
      makeSut({ as: 'h3' })

      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    test('Should render Title with tag H4', () => {
      makeSut({ as: 'h4' })

      expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
    })

    test('Should render Title with tag H5', () => {
      makeSut({ as: 'h5' })

      expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()
    })

    test('Should render Title with tag H6', () => {
      makeSut({ as: 'h6' })

      expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument()
    })
  })
})