import React,{useState,useEffect} from 'react';
import { ScrollView, View, Dimensions, BackHandler, Alert, Text} from 'react-native';
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
	const [userToken,setUserToken] = useState(null);
	const [userProjects,setUserProjects] = useState([])


	useEffect(() => {
		loadUser = async() => {
			let name = await storage.getItem('name');
			let token = await storage.getItem('token');
			api.defaults.headers.common['authorization'] = `Bearer ${token}`;
			setUserName(name)
			api.get('/v1/project/')
			.then(response => {
				setUserProjects(response.data)
			})            
			.catch(err => {
				console.log(err)
			})
		}
		loadUser();
	},[])



	const handleToDetails = ({id,name}) => {
		props.navigation.navigate('Details',{id:id,name:name,token:userToken})
	}

	const handleLogout = async () => {
		delete api.defaults.headers.common['authorization'];
		await storage.removeItem('name')
		await storage.removeItem('token')
		props.navigation.navigate('Logon')
	}

	useFocusEffect(
		React.useCallback(() => {
			const onBackPress = () => {
				Alert.alert("Espere!", "Você tem certeza que quer sair?", [
					{
						text: "Cancelar",
						onPress: () => null,
						style: "cancel"
					},
					{ text: "Sim", onPress: () => BackHandler.exitApp() }
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
						<Card 
						data={userProjects}
						renderItem={({item: project}) => (
							<Projects id={project.id} nav={() => handleToDetails(project)} title={project.name}/>
						)}
						keyExtractor={(item) => item.id}
						/>
					</View>
					<View style={{width:screenWidth}}>
						<Menu logout={handleLogout} />
					</View>
				</ScrollView>
			</Container>
  );
}