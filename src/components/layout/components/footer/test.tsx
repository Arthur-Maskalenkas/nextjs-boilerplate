import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'

import { Footer } from 'components/layout/components/footer/index'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Footer />)

  return {
    sut
  }
}

describe('Footer', () => {
  test('Should render Footer correctly', () => {
    const { sut: { container } } = makeSut()

    expect(screen.getByText(/Footer/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
