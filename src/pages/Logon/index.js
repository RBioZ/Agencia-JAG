import React from 'react';
import {
  Container, 
  InputDiv, 
  Title, 
  Button, 
  Input, 
  ButtonText
} from './styles';

import {Image, View, StatusBar} from 'react-native'

import Logo from '../../../assets/logo.png'
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function index(props) {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#312E38" />
    <Container>

      <View style={{alignItems:'center', position:'absolute', top:100, width:'100%'}}>
        <Image source={Logo} style={{width:100,height:80, resizeMode: 'stretch'}}/>
      </View>

      <InputDiv>
        
        <Title>Faça seu Logon</Title>
        
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />

        <Button activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
          <ButtonText>
            Entrar
          </ButtonText>
          
        </Button> 

      </InputDiv>
    </Container>
    </>
  );
}

//<Icon style={{marginLeft:10}} name={'sign-in'} size={20}/>