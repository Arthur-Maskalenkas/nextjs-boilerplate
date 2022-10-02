import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'
// @ts-ignore

import { HeaderDesktop } from 'components/layout/components/header/desktop/index'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<HeaderDesktop />)

  return {
    sut
  }
}

describe('HeaderDesktop', () => {
  test('Should render HeaderDesktop correctly', () => {
    const { sut: { container } } = makeSut()

    expect(container.querySelector('[data-component-Header-desktop]')).toBeInTheDocument()
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
