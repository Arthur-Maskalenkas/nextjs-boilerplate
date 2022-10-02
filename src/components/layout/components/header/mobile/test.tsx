import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'
// @ts-ignore

import { HeaderMobile } from 'components/layout/components/header/mobile/index'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<HeaderMobile />)

  return {
    sut
  }
}

describe('HeaderMobile', () => {
  test('Should render HeaderMobile correctly', () => {
    const { sut: { container } } = makeSut()

    expect(container.querySelector('[data-component-Header-mobile]')).toBeInTheDocument()
  })

  test('Should render Logo correctly', () => {
    makeSut()

    expect(screen.getByLabelText('Logo')).toBeInTheDocument()
  })

  test('Should render menu links correctly', () => {
    makeSut()

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })
})
