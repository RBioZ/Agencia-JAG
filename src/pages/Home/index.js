import React,{useState,useEffect} from 'react';
import { ScrollView, View, Dimensions, BackHandler, Alert} from 'react-native';
import { useFocusEffect } from "@react-navigation/native"
import {Container, Card} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import Projects from '../../components/Projects';
import api from '../../services/api';
import storage from '@react-native-community/async-storage';

import {useRoute} from '@react-navigation/native';

export default function Main(props){

	const screenWidth = Dimensions.get('window').width
	const route = useRoute();
	const [userName,setUserName] = useState(null);
	const [userToken,setUserToken] = useState(null)

	useEffect(() => {
		loadUser = async() => {
			let name = await storage.getItem('name');
			let token = await storage.getItem('token');
			setUserName(name)
			setUserToken(token)
			api.get('/v1/project/', {
				headers: {
					authorization: 'Bearer ' + token
				}
			})
			.then(response => {
				console.log(response.data)
			})            
			.catch(err => {
				console.log(err)
			})
		}
		loadUser();
	},[])



	const handleToDetails = () => {
		props.navigation.navigate('Details')
	}

	const handleLogout = async () => {
		await storage.removeItem('token')
		await storage.removeItem('name')
		props.navigation.navigate('Logon')
	}

	useFocusEffect(
		React.useCallback(() => {
			const onBackPress = () => {
				Alert.alert("Hold on!", "Are you sure you want to Exit?", [
					{
						text: "Cancel",
						onPress: () => null,
						style: "cancel"
					},
					{ text: "YES", onPress: () => BackHandler.exitApp() }
				]);
				return true;
			};
		
			BackHandler.addEventListener("hardwareBackPress", onBackPress);
		
			return () =>
				BackHandler.removeEventListener("hardwareBackPress", onBackPress);
		
		}, []));


  return(
      <Container>
				<Header name={userName}/>
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
						<Menu logout={handleLogout} />
					</View>
				</ScrollView>
				<Tabs/>
			</Container>
  );
}