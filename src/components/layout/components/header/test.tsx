import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Header } from 'components/layout/components/header/index'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Header />)

  return {
    sut
  }
}

describe('Header', () => {
  test('Should render Header correctly', () => {
    const { sut: { container } } = makeSut()

    expect(container.querySelector('[data-component-header-desktop]')).toBeInTheDocument()
    expect(container.querySelector('[data-component-header-mobile]')).toBeInTheDocument()
  })
})
