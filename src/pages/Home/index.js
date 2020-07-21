import React from 'react';
import {StatusBar, Text, ScrollView, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler'

import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import Projects from '../../components/Projects'

export default function Main(props){

	let screenWidth = Dimensions.get('window').width

	const handleToDetails = () => {
		props.navigation.navigate('Details')
	}

  return(
    <>
			<StatusBar 
				barStyle="light-content" 
				backgroundColor="#312E38" 
			/>
      <Container>
				<Header name="Jonathan"/>
				<ScrollView pagingEnabled={true} horizontal={true} style={{maxHeight:600}}>
					<View style={{width:screenWidth}}>
						<Card>
							<Projects nav={handleToDetails} />
							<Projects />
							<Projects />
							<Projects />
							<Projects />
							<Projects />
							<Projects />
						</Card>
					</View>
					<View style={{width:screenWidth}}>
						<Menu />
					</View>
				</ScrollView>
				<Tabs/>
			</Container>
    </>
  );
}