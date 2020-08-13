import React from 'react';
import {Container, TabsContainer, TabItem, TabText, Linking} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Tabs({func, whats}){



	return(
		<Container>
			<TabsContainer>
				<TabItem onPress={func}  activeOpacity={0.5}>
					<Icon name="user-check" size={24} color="#FFF"/>
					<TabText>Check in</TabText>
				</TabItem>
				<TabItem onPress={whats} activeOpacity={0.5}>
					<Icon name="whatsapp" size={26} color="#FFF"/>
					<TabText>Whatsapp</TabText>
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

/*
					<Icon2 name="logout" size={24} color="#FFF"/>
					<TabText>Logout</TabText>
*/