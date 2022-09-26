import React from 'react'

import styles from './styles.module.scss'

export const Logo = () => {
  return (
    <a aria-label={'Logo'} data-component-logo={true} href={'/#'} className={styles.container}>
      Arthur
    </a>
  )
}
