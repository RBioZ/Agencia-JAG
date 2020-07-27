import React from 'react'
import { View, Text,Modal, TouchableWithoutFeedback, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function index(props) {
  return (
    <Modal 
      visible={props.visible}
      animationType='slide' 
      transparent={true}
    >
      <TouchableWithoutFeedback>
        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.4)'}} />
      </TouchableWithoutFeedback>
      <View style={{flex:5, backgroundColor:'#3E3B47',alignItems:'center'}}>
        <View style={{margin: 20,}}>
        <Text style={{color:'#FFF', fontWeight:'bold',fontSize:16}}>Houve alguma mudança no projeto?</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={{backgroundColor:'#FFF', borderRadius:10}}>
            <Text style={{marginHorizontal:30, marginVertical:10,fontWeight:'bold',fontSize:16}}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#FFF', borderRadius:10}}>
            <Text style={{marginHorizontal:30, marginVertical:10,fontWeight:'bold',fontSize:16}}>Não</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color:'#FFF', fontWeight:'bold',fontSize:16}}>O que foi trabalhado?</Text>
        <TextInput placeholder={"Descrição"}></TextInput>
      </View>
      </View>
    </Modal>
  )
}
