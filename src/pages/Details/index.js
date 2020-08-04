import React, {useState} from 'react';
import {StatusBar, Text, ScrollView, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';
import {PanGestureHandler, State, TouchableOpacity} from 'react-native-gesture-handler'
import { useFocusEffect } from "@react-navigation/native"
import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Item from '../../components/Item';
import Modal from '../../components/Modal';

import Bar from 'react-native-progress/Bar';

import api from '../../services/api';

export default function Main(props){

  const screenWidth = Dimensions.get('window').width
  const [isOpenned, setIsOppened] = useState(false);
  const [data,setData] = useState([1,2,3])

  function handleToggleModal(props){
    setIsOppened((prevState) => !prevState)
  }

  useFocusEffect(() => {
    api.get(`/v1/feed/${props.route.params.id}`, {
      headers: {
        authorization: 'Bearer ' + props.route.params.token
      }
    })
    .then(response => {
      setData(response.data.feed)
      console.log(response.data.feed)
    })            
    .catch(err => {
      console.log(err)
    })
  })

  return(
    <>
			<StatusBar 
				barStyle="light-content" 
				backgroundColor="#312E38" 
			/>
      <Modal toggle={handleToggleModal} visible={isOpenned} />
      <Container>
				<Header name={props.route.params.id}/>
        <Content>
        <Card 
						data={["1","2"]}
						renderItem={({item}) => (
							<Item />
						)}
						keyExtractor={(item) => item}
					/>
        </Content>
          <Text style={{color:'#FFF', marginHorizontal:20, marginTop:10}}>Status: EM ANDAMENTO</Text>
          <Bar style={{marginHorizontal:20, marginTop:10}} height={10} color={'#00D37E'} progress={0.4} width={screenWidth * 0.9} />
          <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => handleToggleModal()} style={{backgroundColor:'#232129', height:50, alignItem:'center',justifyContent:'center',borderRadius:5,paddingHorizontal:20,marginTop:10}}>
              <Text style={{color:'#FFF', fontWeight:'bold'}}>MUDANÇAS / UPGRADE</Text>
            </TouchableOpacity>
          </View>
				<Tabs/>
			</Container>
    </>
  );
}