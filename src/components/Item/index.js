import React from 'react'
import { View, Text } from 'react-native'

import {Container, Color, Content, Title} from './styles'

export default function index(props) {

  return (
    <Container onPress={props.nav} activeOpacity={0.5}>
      <Color type={props.changes ? '#FFF' : '#F00'}/>
      <Content>
        <Title>{props.description}</Title>
      </Content>
    </Container>
  )
}
