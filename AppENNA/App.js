import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TouchableOpacity,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login'
import MenuPrincipal from './screens/MenuPrincipal';
import { Icon, Box, NativeBaseProvider} from "native-base";
import {Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";
import RapportPrev from './screens/RapportPrev';
import RapportCorr from './screens/RapportCorr';
import ConsulterPrev from './screens/ConsulterPrev';
import MenuPrinResp from './screens/MenuPrinResp';
import GestionUserAjout from './screens/GestionUser';
import UserModif from './screens/GestionUserModif';

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" >
    <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
    <Stack.Screen name="Menu Principal" component={MenuPrincipal} 
    options={{ 
      title: 'MENU PRINCIPAL INGÉNIEUR',
      headerTintColor: '#4632A1',
      headerTitleStyle: {
       fontWeight:'bold',
       fontSize: 18
  
      },
    }}
    />
    <Stack.Screen name="Rapport Corrective" component={RapportCorr}
    options={{ 
      title: 'Rapport de Tâche Corrective',
      headerTintColor: '#4632A1',
      headerTitleStyle: {
       fontWeight:'bold',
       fontSize: 18
  
      },
    }}
    />
    <Stack.Screen name="Rapport Preventive" component={RapportPrev}
    options={{ 
      title: 'Rapport de Tâche Préventive',
      headerTintColor: '#4632A1',
      headerTitleStyle: {
       fontWeight:'bold',
       fontSize: 18
  
      },
    }}
    />
    <Stack.Screen name="Consulter Preventive" component={ConsulterPrev}
    options={{ 
      title: 'Consulter Rapports Tâches Préventives',
      headerTintColor: '#4632A1',
      headerTitleStyle: {
       fontWeight:'bold',
       fontSize: 15
  
      },
    }}
    />

    <Stack.Screen name="Menu Principal Responsable" component={MenuPrinResp}
    options={{ 
      title: 'MENU PRINCIPAL RESPONSABLE',
      headerTintColor: '#4632A1',
      headerTitleStyle: {
       fontWeight:'bold',
       fontSize: 18
  
      },
    }}
    />

    <Stack.Screen name="Gestion User Ajout" component={GestionUserAjout}
    options={{ 
      title: 'Gestion des Comptes',
      headerTintColor: '#4632A1',
      headerTitleStyle: {
       fontWeight:'bold',
       fontSize: 18
  
      },
    }}
    />

    <Stack.Screen name="User Modif" component={UserModif}
    options={{ 
      title: 'Gestion des Comptes Users',
      headerTintColor: '#4632A1',
      headerTitleStyle: {
       fontWeight:'bold',
       fontSize: 18
  
      },
    }}
    />

    </Stack.Navigator>
    </NavigationContainer>
    
  );
};