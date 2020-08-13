import React from 'react';

import {Container, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu(props){
  return(
		<Container>


			<SignOutButton onPress={props.logout}>
				<SignOutButtonText>SAIR DO APP</SignOutButtonText>
			</SignOutButton>

		</Container>
	);
}

/*
				<NavItem>
					<Icon name="help-outline" size={20} color="#FFF" />
					<NavText>Me ajuda</NavText>
				</NavItem>
				<NavItem>
					<Icon name="person-outline" size={20} color="#FFF" />
					<NavText>Perfil</NavText>
				</NavItem>
				<NavItem>
					<Icon name="smartphone" size={20} color="#FFF" />
					<NavText>Configurações do app</NavText>
				</NavItem>
*/