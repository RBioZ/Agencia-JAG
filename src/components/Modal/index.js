import React, {useState} from 'react'
import { View, Text,Modal, TouchableWithoutFeedback, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert} from 'react-native'

import api from '../../services/api';

export default function index(props) {

  const[q1,setQ1] = useState(true);
  const[q2,setQ2] = useState(true);
  const[inputText, setInputText] = useState('')
  const[problemsText, setProblemsText] = useState('')

  const handlerPostUpdate = () => {

    if(!inputText.trim() && !problemsText.trim()){
      Alert.alert('Descrição vazia','insira uma descrição!')
      return
    }

    api.post(`/v1/feed/${props.id}`,{
      changes: q1,
      description: inputText,
      problems: problemsText
    })
    .then(response => {
      props.toggle()
      response.data.id 
      ? Alert.alert('Checkin','Checkin realizado com sucesso!')
      : Alert.alert('Checkin','Você não tem permissão de fazer Checkin!')
      
    })            
    .catch(err => {
      console.log(err)
      Alert.alert('Checkin','Você não tem permissão de fazer Checkin!')
    })

    api.put(`/v1/feed/${props.id}`)
    .then(response => {
      
    })            
    .catch(err => {
      Alert.alert('Erro','Ocorreu um erro ao realizar o checkin!')
    })
  }

  function handleToggleQ1(bol){
    setQ1(bol)
  }

  function handleToggleQ2(bol){
    setQ2(bol)
  }

  return (
    <Modal 
      visible={props.visible}
      animationType='slide' 
      transparent={true}
      onRequestClose={() => props.toggle()}
    >
      <TouchableWithoutFeedback onPress={() => props.toggle()}>
        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.4)'}} />
      </TouchableWithoutFeedback>
      
      
      <View style={{flex:5, backgroundColor:'#3E3B47',alignItems:'center', }}>
        <View style={{flex:1,paddingHorizontal:30,width:'100%'}}>
          <ScrollView>
          <Text style={{paddingTop:20,color:'#FFF', fontWeight:'bold',fontSize:16, textAlign:'center'}}>Houve alguma mudança no projeto?</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:20}}>
            <TouchableOpacity onPress={() => handleToggleQ1(true)} style={{backgroundColor:q1?'#FFF':'rgba(255,255,255,0.4)', borderRadius:10}}>
              <Text style={{marginHorizontal:30, marginVertical:10,fontWeight:'bold',fontSize:16}}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleToggleQ1(false)} style={{backgroundColor:q1?'rgba(255,255,255,0.4)':'#FFF', borderRadius:10}}>
              <Text style={{marginHorizontal:30, marginVertical:10,fontWeight:'bold',fontSize:16}}>Não</Text>
            </TouchableOpacity>
          </View>

          {q1 
          ? <Text style={{marginTop:20,color:'#FFF', fontWeight:'bold',fontSize:16, textAlign:'center'}}>O que foi trabalhado?</Text>
          : <Text style={{marginTop:20,color:'#FFF', fontWeight:'bold',fontSize:16, textAlign:'center'}}>Você está trabalhando no ultimo Checkin?</Text>
          }

          {q1
          ?
          <>

          <View style={{marginTop:20}}>
          <TextInput maxLength={40} onChangeText={ text => setInputText(text)}  multiline={true} style={{color:'#FFF',backgroundColor:'#232129', borderRadius:5,height:100, textAlignVertical:'top', padding:5}} placeholder={"Descrição"}></TextInput>
          </View>
          
          <View style={{alignItems:'center',justifyContent:'center',flex:1}}>

          </View>

          </>
          :
          <>
          <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:20}}>
          <TouchableOpacity onPress={() => handleToggleQ2(true)} style={{backgroundColor:q2?'#FFF':'rgba(255,255,255,0.4)', borderRadius:10}}>
            <Text style={{marginHorizontal:30, marginVertical:10,fontWeight:'bold',fontSize:16}}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleToggleQ2(false)} style={{borderRadius:10, backgroundColor:q2?'rgba(255,255,255,0.4)':'#FFF'}}>
            <Text style={{marginHorizontal:30, marginVertical:10,fontWeight:'bold',fontSize:16}}>Não</Text>
          </TouchableOpacity>
          </View>
          {q2
          ?
          <>
          <View style={{alignItems:'center',justifyContent:'center',flex:1}}>

          </View>

          </>
          :
          <>
          <Text style={{marginVertical:20,color:'#FFF', fontWeight:'bold',fontSize:16, textAlign:'center'}}>Houve algum obstáculo, que impediu de seguir com o projeto?</Text>
          <View>
          <TextInput onChangeText={ text => setProblemsText(text)} maxLength={40} multiline={true} style={{color:'#FFF',backgroundColor:'#232129', borderRadius:5,height:100, textAlignVertical:'top', padding:5}} placeholder={"Descrição"}></TextInput>
          </View>
          </>
          }
          </>
          }
        </ScrollView>
        <TouchableOpacity onPress={() => handlerPostUpdate()} style={{backgroundColor:'#FFF', borderRadius:10, height:60, justifyContent:'center',marginBottom:15, alignItems:'center',marginTop:20}}>
              <Text style={{marginHorizontal:30, marginVertical:10,fontWeight:'bold',fontSize:16}}>Enviar</Text>
        </TouchableOpacity>
        </View>

      </View>
    </Modal>
  )
}
