import React from 'react'
import style from './styles.module.scss'
import { Button } from '../../components/atoms/Button'

const HomeTemplate = () => (

  <main data-component-home-template={true} className={style.wrapper}>
    <Button/>
  </main>
)

export default HomeTemplate
