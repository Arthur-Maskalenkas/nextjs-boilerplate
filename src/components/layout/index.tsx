import React from 'react'

import styles from './styles.module.scss'

import { Header } from 'components/layout/components/header'
import { Footer } from 'components/layout/components/footer'

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }:LayoutProps) => {
  return (
    <div data-component-layout={true} className={`${styles.container}`}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
