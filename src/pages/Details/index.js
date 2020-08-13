import React, {useState, useEffect} from 'react';
import {StatusBar, Text, ScrollView, View, Dimensions, BackHandler,Alert, Linking, ActivityIndicator} from 'react-native';
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
  const [data,setData] = useState([])
  const [percent,setPercent] = useState(0)
  const [loading,setLoading] = useState(true);

  function handleToggleModal(props){
    setIsOppened((prevState) => !prevState)
  }

  useEffect(() => {
    api.get(`/v1/feed/${props.route.params.id}`)
    .then(response => {
      setData(response.data.feed)
      setPercent(parseFloat(response.data.percent/100))
      setLoading(false)
    })            
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  },[props])


  function sendWhatsapp() {
		Linking.openURL(`whatsapp://send?phone=+5521971224827&text=*Solicitar alteração*\nUsuário:${props.route.params.user}\nProjeto:${props.route.params.name}\n\nDescrição:`);
  }
  
  return(
    <>
			<StatusBar 
				barStyle="light-content" 
				backgroundColor="#312E38" 
			/>
      <Modal id={props.route.params.id} toggle={handleToggleModal} visible={isOpenned} />
      <Container>
				<Header name={props.route.params.name}/>
        <Content>
          {
            loading
            ?
              <ActivityIndicator style={{flex:1,backgroundColor:'#232129', marginHorizontal:20, borderRadius:4}} size="large" color="#FFF" />
            :
            <Card 
						data={data}
						renderItem={({item}) => (
              <Item 
                dev={item.dev.name}
                description={item.description} 
                changes={item.changes}
                problems={item.problems}
              />
						)}
						keyExtractor={(item) => item.id}
					/>
          }

        </Content>
          <Text style={{color:'#FFF', marginHorizontal:20, marginTop:10}}>Status: EM ANDAMENTO</Text>
          <Bar style={{marginHorizontal:20, marginTop:10}} height={10} color={'#00D37E'} progress={percent} width={screenWidth * 0.9} />
          <View style={{alignItems:'center'}}>
          </View>
				<Tabs whats={() => sendWhatsapp()} func={handleToggleModal}/>
			</Container>
    </>
  );
}

//onPress={() => handleToggleModal()}