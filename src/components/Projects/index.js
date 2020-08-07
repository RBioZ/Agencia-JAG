import React from 'react'
import { View, Text } from 'react-native'

import {Container, Color, Content, Title} from './styles'

export default function index(props) {

  return (
    <Container onPress={props.nav} activeOpacity={0.5}>
      <Color/>
      <Content>
        <Title>{props.title}</Title>
      </Content>
    </Container>
  )
}
