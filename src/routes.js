import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Logon from './pages/Logon';
import Home from './pages/Home';
import Details from './pages/Details';


const AuthStack = createStackNavigator();
const Stack = createStackNavigator();

function Main(){
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
}

function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName={true?"Logon":"Home"} screenOptions={{headerShown:false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} >
        <AuthStack.Screen name="Logon" component={Logon} />
        <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="Details" component={Details} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;