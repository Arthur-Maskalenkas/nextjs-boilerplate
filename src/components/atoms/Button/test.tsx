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

describe('Button', () => {
  test('Should render Button correctly', () => {
    makeSut()

    expect(screen.getByRole('button', { name: 'children' })).toBeInTheDocument()
  })
})
