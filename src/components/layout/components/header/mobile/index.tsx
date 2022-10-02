import React from 'react'
import Link from 'next/link'

import styles from 'components/layout/components/header/mobile/styles.module.scss'
import { menuLinks } from 'components/layout/components/header/utils'
import { Logo } from 'components/atoms'

export const HeaderMobile = () => {
  return (
    <div data-component-header-mobile={true} className={`${styles.container}`}>
      <Logo/>
      <nav>
        <ul>
          {menuLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
