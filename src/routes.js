import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Logon from './pages/Logon';
import Home from './pages/Home';
import Details from './pages/Details';
import WebView from './pages/WebView';


const AuthStack = createStackNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName={"Logon"} screenOptions={{headerShown:false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} >
        <AuthStack.Screen name="Logon" component={Logon} />
        <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="Details" component={Details} />
        <AuthStack.Screen name="Web" component={WebView} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;