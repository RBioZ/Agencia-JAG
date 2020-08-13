import React,{useState,useEffect} from 'react';
import { ScrollView, View, Dimensions, BackHandler, Alert, Text, TouchableOpacity, Linking, ActivityIndicator} from 'react-native';
import { useFocusEffect } from "@react-navigation/native"
import {Container, Card} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import Projects from '../../components/Projects';
import api from '../../services/api';
import storage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/AntDesign'

import {useRoute} from '@react-navigation/native';

export default function Main(props){

	const screenWidth = Dimensions.get('window').width
	const route = useRoute();
	const [userName,setUserName] = useState(null);
	const [userToken,setUserToken] = useState(null);
	const [userProjects,setUserProjects] = useState([])
	const [loading,setLoading] = useState(true);


	useEffect(() => {
		loadUser = async() => {
			let name = await storage.getItem('name');
			let token = await storage.getItem('token');
			api.defaults.headers.common['authorization'] = `Bearer ${token}`;
			setUserName(name)
			api.get('/v1/users/me')
			.then(response => {
				setUserProjects(response.data)
			})            
			.catch(err => {
				console.log(err)
			})
			setLoading(false)
		}
		loadUser();
	},[])

  function sendWhatsapp() {
		Linking.openURL(`whatsapp://send?phone=+5521971247393&text=*Novo Projeto*\nDescrição: `);
  }

	const handleToDetails = ({id,name}) => {
		props.navigation.navigate('Details',{id:id,name:name,token:userToken,user:userName})
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
				
				{
					loading
					?
						<ActivityIndicator style={{flex:1,backgroundColor:'#232129'}} size="large" color="#FFF" />
					:
					<ScrollView showsHorizontalScrollIndicator={false} pagingEnabled={true} horizontal={true} style={{maxHeight:600}}>
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
				}
				
				<View style={{height:100, alignItems:'center'}}>
				<TouchableOpacity onPress={() => sendWhatsapp()} activeOpacity={0.5} style={{width:50,height:50,backgroundColor:'#3E3B47', borderRadius:25, alignItems:'center',justifyContent:'center', marginTop:10}} >
					<Icon name="plus" size={30} color="#FFF"/>
        </TouchableOpacity>
				</View>
			</Container>
  );
}