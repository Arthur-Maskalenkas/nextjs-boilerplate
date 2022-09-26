import React from 'react'

import styles from './styles.module.scss'

import { listOfMenuLinks } from '../utils'

import { HeaderProps } from 'components/organisms/Header/index'
import { Logo } from 'components/atoms'

export const HeaderDesktop = ({ menuScrolling }: HeaderProps) => {
  const classNameIfMenuScrolling = menuScrolling ? styles.menuScrolling : ''

  return (
    <div className={styles.container}>
      {menuScrolling && <div className={styles.containerToNotAffectScroll} />}
      <div className={`${styles.containerMenu} ${classNameIfMenuScrolling} `}>
        <div className={`${styles.containerContent}`}>
          <Logo/>
          <nav>
            {listOfMenuLinks.map((link, index) => (
              <a href={link.href} className={styles.linkMenu} key={index} >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
