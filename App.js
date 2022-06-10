import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './src/Routes/Stack'

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})