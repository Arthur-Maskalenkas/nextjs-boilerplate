import React, { useRef } from 'react'

import styles from './styles.module.scss'

import { Icon, Logo } from 'components/atoms'
import { MenuMobileWithRef, RefMenuMobileProps } from 'components/organisms/Header/exports'
import { HeaderProps } from 'components/organisms/Header/index'

export const HeaderMobile = ({ menuScrolling }: HeaderProps) => {
  const classNameIfMenuScrolling = menuScrolling ? styles.menuScrolling : ''

  const refMenuMobile = useRef<RefMenuMobileProps>(null)

  const handleOpenMenuMobile = () => {
    refMenuMobile.current?.openComponent()
  }

  return (
    <>
      <MenuMobileWithRef ref={refMenuMobile} />
      <div className={styles.container}>
        {menuScrolling && <div className={styles.containerToNotAffectScroll} />}

        <div className={`${styles.containerMenu} ${classNameIfMenuScrolling} `}>
          <div className={`${styles.containerContent}`}>
            <button onClick={() => handleOpenMenuMobile()} aria-label="Abrir Menu">
              <Icon icon="list" color={'#ffffff'} alt={'Abrir Menu'} size={30}/>
            </button>
            <Logo/>
          </div>
        </div>
      </div>
    </>
  )
}
