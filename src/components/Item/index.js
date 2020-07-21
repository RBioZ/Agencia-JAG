import React from 'react'
import { View, Text } from 'react-native'

import {Container, Color, Content, Title} from './styles'

export default function index(props) {

  const handlerEvent = () => {
    console.log('H')
  }

  return (
    <Container onPress={props.nav} activeOpacity={0.5}>
      <Color type={`${props.color}`}/>
      <Content>
        <Title>Inicio do Projeto - Gabriel -  EM ANDAMENTO</Title>
      </Content>
    </Container>
  )
}
