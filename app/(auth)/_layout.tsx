import React from 'react'
import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{headerShown:false}}/>
      <Stack.Screen name="sign-up" options={{headerShown:true}}/>
      <Stack.Screen name="sign-in" options={{headerShown:true}}/>
    </Stack>
  )
}

export default AuthLayout

