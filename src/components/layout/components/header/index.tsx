import React from 'react'

import styles from 'components/layout/components/header/styles.module.scss'
import { HeaderDesktop } from 'components/layout/components/header/desktop'
import { HeaderMobile } from 'components/layout/components/header/mobile'

export const Header = () => {
  return (
    <header data-testid="main-header" className={`${styles.container}`}>
      <HeaderDesktop/>
      <HeaderMobile/>
    </header>
  )
}