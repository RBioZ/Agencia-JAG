import React from 'react';
import {Image, View, StatusBar} from 'react-native';

import {
  Container, 
  InputDiv, 
  Title, 
  Button, 
  Input, 
  ButtonText
} from './styles';

import Logo from '../../../assets/logo.png'

export default function index(props) {
  return (
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
  );
}

//<Icon style={{marginLeft:10}} name={'sign-in'} size={20}/>