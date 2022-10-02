import React from 'react'

import { Header } from 'components/layout/components/header'
import { Footer } from 'components/layout/components/footer'

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }:LayoutProps) => {
  return (
    <div data-component-layout={true}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
