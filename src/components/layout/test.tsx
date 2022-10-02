import React from 'react'
import { render, RenderResult } from '@testing-library/react'

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
    const { sut: { container } } = makeSut()

    expect(container.querySelector('[data-component-header]')).toBeInTheDocument()
    expect(container.querySelector('[data-component-footer]')).toBeInTheDocument()
  })
})
