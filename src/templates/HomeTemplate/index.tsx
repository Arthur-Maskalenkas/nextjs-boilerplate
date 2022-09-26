import React from 'react'

import style from './styles.module.scss'

import { Button, Icon } from 'components/atoms'

const HomeTemplate = () => (
  <main data-component-home-template={true} className={style.container}>
    <Button>Botão</Button>
    <Icon icon={'thumbsUp'} size={50} weight={'duotone'} />
  </main>
)

export default HomeTemplate
