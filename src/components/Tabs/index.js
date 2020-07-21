import React from 'react';
import {Container, TabsContainer, TabItem, TabText} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Tabs(){
	return(
		<Container>
			<TabsContainer>
				<TabItem  activeOpacity={0.5}>
					<Icon name="user-check" size={24} color="#FFF"/>
					<TabText>Check in</TabText>
				</TabItem>
				<TabItem  activeOpacity={0.5}>
					<Icon name="clock" size={24} color="#FFF"/>
					<TabText>Andamento</TabText>
				</TabItem>
				<TabItem  activeOpacity={0.5}>
				</TabItem>
				<TabItem activeOpacity={0.5}>
				</TabItem>
				<TabItem activeOpacity={0.5}>
				</TabItem>
			</TabsContainer>
		</Container>
	)
}