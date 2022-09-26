import React, { useEffect, useState } from 'react'

import { HeaderDesktop, HeaderMobile } from './exports'

export type HeaderProps = {
  menuScrolling: boolean
}

export const Header = () => {
  const [menuScrolling, setMenuScrolling] = useState<boolean>(false)

  const distanceToMenuScrollAppear = 0

  const changeMenuAppearance = () => {
    if (window.scrollY > distanceToMenuScrollAppear) {
      setMenuScrolling(true)
      return
    }

    setMenuScrolling(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeMenuAppearance)

    return () => window.removeEventListener('scroll', changeMenuAppearance)
  }, [])

  return (
    <header data-component-header={true}>
      <HeaderMobile menuScrolling={menuScrolling} />
      <HeaderDesktop menuScrolling={menuScrolling} />
    </header>
  )
}
