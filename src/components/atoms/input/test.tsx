import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { InputWithForwardRef, InputProps } from '.'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (props?: Partial<InputProps>): SutTypes => {
  const sut = render(<InputWithForwardRef {...props} placeholder={'Input'}/>)

  return {
    sut
  }
}

describe('Input', () => {
  describe('Default', () => {
    test('Should render Input correctly', () => {
      makeSut()
    })

    test('Should render Input without icon', () => {
      const { sut: { container } } = makeSut()

      expect(container.querySelector('.withoutIcon')).toBeInTheDocument()
    })

    test('Should render Input with variation default', () => {
      const { sut: { container } } = makeSut()

      expect(container.querySelector('[data-component-input].default')).toBeInTheDocument()
    })
  })

  describe('Variations', () => {
    test('Should render Input with variation primary', () => {
      const { sut: { container } } = makeSut({ variant: 'primary' })

      expect(container.querySelector('[data-component-input].primary')).toBeInTheDocument()
    })
  })

  test('Should render Input with icon', () => {
    const { sut: { container } } = makeSut({ icon: 'list' })

    expect(container.querySelector('.withIcon')).toBeInTheDocument()
  })

  test('Should type input', async () => {
    makeSut()

    const input = screen.getByPlaceholderText('Input') as HTMLInputElement

    await userEvent.type(input, 'test')

    expect(input.value).toEqual('test')
  })
})
