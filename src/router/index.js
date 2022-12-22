import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, TambahKontak, DetailKontak, EditKontak } from '../pages'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="TambahKontak" component={TambahKontak} options={{ title: 'Tambah Kontak' }} />
      <Stack.Screen name="DetailKontak" component={DetailKontak} options={{ title: 'Detail Kontak' }} />
      <Stack.Screen name="EditKontak" component={EditKontak} options={{ title: 'Edit Kontak' }} />
      <Stack.Screen name="LoginPage" component={EditKontak} options={{ title: 'Login' }} />
    </Stack.Navigator>

  )
}

export default Router
