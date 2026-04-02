import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import RecordVideoScreen from '../screens/Camera';
import Home from '../screens/Home'; 
import SessionScreen from '../screens/Session';
import InstructionsScreen from '../screens/Instructions';
import PreviewScreen from '../screens/Preview'; 



const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />  
      <Stack.Screen name="Session" component={SessionScreen} />
      <Stack.Screen name="Instructions" component={InstructionsScreen} />
      <Stack.Screen name="RecordVideo" component={RecordVideoScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
    </Stack.Navigator>
  );
}



