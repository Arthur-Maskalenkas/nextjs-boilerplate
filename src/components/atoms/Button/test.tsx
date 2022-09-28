import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'

import { Button } from '.'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Button>children</Button>)

  return {
    sut
  }
}

const get = {
  button: () => screen.getByRole('button', { name: /children/i })
}

describe('Button', () => {
  test('Should render Button correctly', () => {
    makeSut()

    expect(get.button()).toBeInTheDocument()
  })

  describe('Variations', () => {
    test('Should render Button with default variation', () => {
      makeSut()

      expect(get.button()).toHaveClass('default')
    })
  })
})
