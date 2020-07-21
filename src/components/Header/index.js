import React from 'react';
import {Image} from 'react-native'
import {Container, Top, Logo, Title} from './styles';
import logo from '../../../assets/favicon.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header(props){
	return(
		<Container> 
			<Top>
        <Image source={logo} style={{width:28,height:28, resizeMode: 'stretch'}}/>
				<Title>{props.name}</Title>
			</Top>
			{props.arrow 
			? 
				<Icon name="keyboard-arrow-down" size={20} color="#FFF" />
			:
				null
			}
		</Container>
	)
}

//<Logo style={{width:30,height:30}} source={logo} />