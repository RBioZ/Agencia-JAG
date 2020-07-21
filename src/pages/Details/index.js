import React from 'react';
import {StatusBar, Text, ScrollView, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';
import {PanGestureHandler, State, TouchableOpacity} from 'react-native-gesture-handler'

import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Item from '../../components/Item';

import Bar from 'react-native-progress/Bar';

export default function Main(){

  let screenWidth = Dimensions.get('window').width

  return(
    <>
			<StatusBar 
				barStyle="light-content" 
				backgroundColor="#312E38" 
			/>
      <Container>
				<Header name="Project Bet Panel"/>
        <Content>
          <Card>
            <Item color={"#FFF"} />
            <Item color={"#FE001A"} />
            <Item color={"#FE001A"}/>
            <Item color={"#00D37E"}/>
            <Item color={"#FE001A"}/>
            <Item color={"#00D37E"}/>
            <Item color={"#FFF"}/>
            <Item color={"#FFF"}/>
            <Item color={"#00D37E"}/>
          </Card>
        </Content>
          <Text style={{color:'#FFF', marginHorizontal:20, marginTop:10}}>Status: EM ANDAMENTO</Text>
          <Bar style={{marginHorizontal:20, marginTop:10}} height={10} color={'#00D37E'} progress={0.4} width={screenWidth * 0.9} />
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:'#232129', height:50, alignItem:'center',justifyContent:'center',borderRadius:5,paddingHorizontal:20,marginTop:10}}>
              <Text style={{color:'#FFF', fontWeight:'bold'}}>MUDANÇAS / UPGRADE</Text>
            </TouchableOpacity>
          </View>
				<Tabs/>
			</Container>
    </>
  );
}