import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { listOfMenuLinks } from 'helpers/data/link-menu'

import styles from './styles.module.scss'

import { Icon } from 'components/atoms'

export interface RefMenuMobileProps {
  openComponent: () => void
}

const MenuMobile: React.ForwardRefRenderFunction<RefMenuMobileProps, any> = (
  props,
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menuClosing, setMenuClosing] = useState<boolean>(false)

  const handleClick = () => {
    setMenuClosing(true)

    setTimeout(() => {
      setMenuClosing(false)
      setIsOpen(false)
    }, 400)
  }

  const openComponent = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isOpen])

  useImperativeHandle(ref, () => ({
    openComponent
  }))

  const classIsOpen = isOpen ? styles.isOpen : ''
  const classIfMenuClosing = menuClosing ? styles.menuClosing : ''
  return (
    <div>
      {isOpen && (
        <nav
          className={`${styles.containerMenu} ${classIsOpen} ${classIfMenuClosing}`}
        >
          {listOfMenuLinks.map((link, index) => (
            <a href={link.href} className={styles.linkMenu} key={index} onClick={() => handleClick()}>
              {link.label}
            </a>
          ))}
          <button
            data-close-modal={true}
            aria-label="Fechar Menu"
            onClick={() => handleClick()}
          >
            <Icon icon="X" size={50} alt={'Fechar Menu'} color={'#FF0653'}/>
          </button>
        </nav>
      )}
    </div>
  )
}

export const MenuMobileWithRef = forwardRef(MenuMobile)
