import React from 'react'
import { View, Text } from 'react-native'

import {Container, Color, Content, Title} from './styles'

export default function index(props) {

  return (
    <Container onPress={props.nav} activeOpacity={0.5}>
      <Color type={props.changes ? '#3BBD89' : props.problems ? '#BD3A48' : '#FFF'}/>
      <Content>
        <Title>{props.dev}: {props.description ? props.description : props.problems ? props.problems : "Trabalhando no ultimo checkin"}</Title>
      </Content>
    </Container>
  )
}
