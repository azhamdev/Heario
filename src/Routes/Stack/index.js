import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import ChatScreen from '../../screens/Chat';
import Home from '../../screens/Home';
import Detail from '../../screens/Detail';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='Chat' component={ChatScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}