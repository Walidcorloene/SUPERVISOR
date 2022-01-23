import React, { useContext, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login'
import MenuPrincipal from './screens/MenuPrincipal';
import RapportPrev from './screens/RapportPrev';
import RapportCorr from './screens/RapportCorr';
import ConsulterPrev from './screens/ConsulterPrev';
import MenuPrinResp from './screens/MenuPrinResp';
import GestionUserAjout from './screens/GestionUser';
import UserModif from './screens/GestionUserModif';

import { AuthContext } from "./context/auth-context";

const Stack = createStackNavigator();

export default function App() {
  const auth = useContext(AuthContext);

  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token, _tokenExpires) => {
    setToken(token);
    setUserId(uid);
    localStorage.setItem("userData", JSON.stringify({
      userId: uid,
      token: token,
      _tokenExpires: new Date(new Date() + 1000 * 60 * 60),
    }))
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, [])

  return (
    <AuthContext.Provider value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout,
    }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {!auth.isLoggedIn && <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />}
          {auth.isLoggedIn &&
            <><Stack.Screen name="Menu Principal" component={MenuPrincipal}
              options={{
                title: 'MENU PRINCIPAL INGÉNIEUR',
                headerTintColor: '#4632A1',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 18
                },
              }} /><Stack.Screen name="Rapport Corrective" component={RapportCorr}
                options={{
                  title: 'Rapport de Tâche Corrective',
                  headerTintColor: '#4632A1',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 18
                  },
                }} /><Stack.Screen name="Rapport Preventive" component={RapportPrev}
                  options={{
                    title: 'Rapport de Tâche Préventive',
                    headerTintColor: '#4632A1',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 18
                    },
                  }} /><Stack.Screen name="Consulter Preventive" component={ConsulterPrev}
                    options={{
                      title: 'Consulter Rapports Tâches Préventives',
                      headerTintColor: '#4632A1',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 15
                      },
                    }} /><Stack.Screen name="Menu Principal Responsable" component={MenuPrinResp}
                      options={{
                        title: 'MENU PRINCIPAL RESPONSABLE',
                        headerTintColor: '#4632A1',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          fontSize: 18
                        },
                      }} /><Stack.Screen name="Gestion User Ajout" component={GestionUserAjout}
                        options={{
                          title: 'Gestion des Comptes',
                          headerTintColor: '#4632A1',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18
                          },
                        }} /><Stack.Screen name="User Modif" component={UserModif}
                          options={{
                            title: 'Gestion des Comptes Users',
                            headerTintColor: '#4632A1',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                              fontSize: 18
                            },
                          }} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>

  );
};