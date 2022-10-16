import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'

import { Loading } from '.'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Loading />)

  return {
    sut
  }
}

describe('Loading', () => {
  test('Should render Loading correctly', () => {
    const { sut: { container } } = makeSut()
    expect(container).toMatchSnapshot()

    expect(screen.getByLabelText('carregando')).toBeInTheDocument()
  })
})
