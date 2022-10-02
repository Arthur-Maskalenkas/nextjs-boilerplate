import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Logo } from '.'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Logo />)

  return {
    sut
  }
}

describe('Logo', () => {
  test('Should render Logo correctly', () => {
    const { sut: { container } } = makeSut()

    expect(container).toMatchSnapshot()
  })
})
