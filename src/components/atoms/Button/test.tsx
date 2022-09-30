import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'

import { Button, ButtonProps } from '.'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (props?:Partial<ButtonProps>): SutTypes => {
  const sut = render(<Button {...props}>children</Button>)

  return {
    sut
  }
}

const get = {
  button: () => screen.getByRole('button', { name: /children/i })
}

describe('Button', () => {
  describe('default', () => {
    test('Should render Button correctly', () => {
      makeSut()

      expect(get.button()).toBeInTheDocument()
    })

    test('Should render button with default props', () => {
      makeSut()

      expect(get.button()).toBeInTheDocument()
      expect(get.button()).toHaveClass('default')
      expect(get.button()).toHaveClass('defaultRounded')
    })
  })

  describe('Variations', () => {
    test('Should render button with primary variation', () => {
      makeSut({ variant: 'primary' })

      expect(get.button()).toHaveClass('primary')
    })

    test('Should render Button with full width', () => {
      makeSut({ fullWidth: true })

      expect(get.button()).toHaveClass('fullWidth')
    })

    test('Should render Button with rounded small', () => {
      makeSut({ rounded: 'small' })

      expect(get.button()).toHaveClass('smallRounded')
    })
  })

  test('Should render button with tag a', () => {
    const { sut: { container } } = makeSut({ as: 'a' })

    expect(screen.queryByRole('button', { name: /children/i })).not.toBeInTheDocument()

    expect(container.querySelector('a')).toBeInTheDocument()
    expect(container.querySelector('a')?.textContent).toBe('children')
  })

  test('Should render button with icon', () => {
    makeSut({ icon: <div>icon</div> })

    expect(get.button()).toHaveClass('withIcon')
    expect(screen.getByText('icon')).toBeInTheDocument()
  })
})
