import React from 'react';
import { ScrollView, View, Dimensions} from 'react-native';

import {Container, Card} from './styles';
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
  );
}