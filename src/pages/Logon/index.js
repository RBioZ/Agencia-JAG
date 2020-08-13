import React, {useState, useEffect} from 'react';
import {Image, View, Alert, ActivityIndicator, Keyboard, Text, TouchableOpacity} from 'react-native';
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
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [imageOpacity,setImageOpacity] = useState(1)
  const [isSignup,setIsSignup] = useState(false)

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    loadUser = async() => {
      let value = await storage.getItem('token')
      if(value !== null){
        props.navigation.navigate('Home')
      }
      setLoading(false)
    }
    loadUser()
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  },[])

  function handleToggleSignUp(props){
    setIsSignup((prevState) => !prevState)
  }

  const _keyboardDidShow = () => {
    setImageOpacity(0)
  };

  const _keyboardDidHide = () => {
    setImageOpacity(1)
  };

  async function handleLogin(){
    setLoading(true)
    api.post('/v1/users/signin', {
      email: email,
      password: password
    })
    .then(async function (response) {
      let data = response.data;
      api.defaults.headers.common['authorization'] = `Bearer ${data.token}`;
      await storage.setItem('name', data.user.name);
      await storage.setItem('token', data.token);
      props.navigation.navigate('Home');
      setLoading(false);
    })
    .catch(function (error) {
      setLoading(false)
      Alert.alert('Email ou Senha inválidos',"O e-mail e senha que você digitou não batem com nossos registros")
    });
    
  }

  async function handleSignUp(){
    setLoading(true)
    api.post('/v1/users/signup', {
      name:name,
      email: email,
      password: password
    })
    .then(async function (response) {
      if(response.status == 400){
        Alert.alert("Dados Inválidos","O email já está sendo usado!")
      }
      else(
        Alert.alert("Cadastro realizado com sucesso!")
      )
      setLoading(false);
    })
    .catch(function (error) {
      setLoading(false)
      Alert.alert("Dados Inválidos","O email já está sendo usado!")
      console.log(error)
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
        {!!imageOpacity
        ?
        <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
          <Image source={Logo} style={{width:100,height:80, resizeMode: 'stretch', opacity: imageOpacity}}/>
        </View>
        :
        null
        }


        <View style={{flex:3}}>
        <InputDiv>
          {
          isSignup
          ?
          <>
          <Title>Cadastro</Title>

          <Input value={name} onChangeText={e => setName(e)}  placeholder="Nome" />
          <Input value={email} onChangeText={e => setEmail(e)} placeholder="E-mail" />
          <Input value={password} onChangeText={e => setPassword(e)} secureTextEntry={true} placeholder="Senha" />
          

          <Button activeOpacity={0.5} onPress={() => handleSignUp()}>
            <ButtonText>
              Cadastrar
            </ButtonText>
          </Button> 
          </>
          :
          <>
          <Title>Login</Title>
          
          <Input value={email} onChangeText={e => setEmail(e)} placeholder="E-mail" />
          <Input value={password} onChangeText={e => setPassword(e)} secureTextEntry={true} placeholder="Senha" />
          
          <Button activeOpacity={0.5} onPress={() => handleLogin()}>
            <ButtonText>
              Entrar
            </ButtonText>
          </Button> 
          </>
        }
        </InputDiv>
        
        <TouchableOpacity onPress={() => handleToggleSignUp()} style={{alignItems:'center', marginTop:10}}>
          <Text style={{color:'#FFF',textDecorationLine: 'underline', fontWeight:'bold'}}>{!isSignup ?"Não tem conta? Cadastre-se":"Já tem conta? Faça login"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Web')} style={{alignItems:'center', marginTop:30}}>
          <Text style={{color:'#FFF'}}>Conheça nossa Agência!</Text>
        </TouchableOpacity>
        </View>

      </Container>
    }

    </>
  );
}