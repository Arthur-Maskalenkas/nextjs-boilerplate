import React from 'react'
import { render, RenderResult, screen } from '@testing-library/react'

import { Layout } from 'components/layout/index'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Layout >Children</Layout>)

  return {
    sut
  }
}

describe('Layout', () => {
  test('Should render Layout correctly', () => {
    makeSut()

    expect(screen.getByTestId('main-header')).toBeInTheDocument()
    expect(screen.getByTestId('main-footer')).toBeInTheDocument()
  })
})