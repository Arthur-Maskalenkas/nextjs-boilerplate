import React from 'react'

import styles from './styles.module.scss'

export const Loading = () => {
  return (
    <div aria-label={'carregando'} className={styles.container}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
