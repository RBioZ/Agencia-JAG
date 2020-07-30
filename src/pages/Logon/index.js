import React, {useState, useEffect} from 'react';
import {Image, View, Alert, ActivityIndicator} from 'react-native';
import storage from '@react-native-community/async-storage';

import api from '../../services/api';

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

  const [loading,setLoading] = useState(true);

  useEffect(() => {
    loadUser = async() => {
      let value = await storage.getItem('token')
      if(value !== null){
        props.navigation.navigate('Home')
      }
      setLoading(false)
    }
    loadUser()
  },[])

  async function handleLogin(){
    setLoading(true)
    api.post('/v1/users/signin', {
      email: "admin@admin.com",
      password: "ZDw2[g,dTj)6a,V_"
    })
    .then(async function (response) {
      let token = response.data.token;
      await storage.setItem('token', token)
      props.navigation.navigate('Home')
      setLoading(false)
    })
    .catch(function (error) {
      setLoading(false)
      Alert.alert('Login ou Senha inválidos',"O e-mail e senha que você digitou não batem com nossos registros")
    });
    
  }

  return (
    <>
    {
    loading
     ? 
      <ActivityIndicator style={{flex:1,backgroundColor:'#312E38'}} size="large" color="#FFF" />
     : 
      <Container>

        <View style={{alignItems:'center', position:'absolute', top:100, width:'100%'}}>
          <Image source={Logo} style={{width:100,height:80, resizeMode: 'stretch'}}/>
        </View>

        <InputDiv>
          
          <Title>Faça seu Logon</Title>
          
          <Input placeholder="E-mail" />
          <Input secureTextEntry={true} placeholder="Senha" />

          <Button activeOpacity={0.5} onPress={() => handleLogin()}>
            <ButtonText>
              Entrar
            </ButtonText>
          </Button> 

        </InputDiv>
      </Container>
    }
    </>
  );
}

//<Icon style={{marginLeft:10}} name={'sign-in'} size={20}/>