import React, { useContext } from 'react'
import { ScrollView, ImageBackground, Dimensions, Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Input, Icon, Box, NativeBaseProvider } from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../context/auth-context";

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }

  constructor() {
    const auth = useContext(AuthContext);
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signIn = async () => {
    const { email, password } = this.state
    let response;
    try {
      // here place your signin logic
      console.log('user: ', { email, password })
      await fetch('http://192.168.43.44:3000/user-signin', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      }).then(response => response.json()).then(data => response = data);
      auth.login(response.id_user, response.accessToken, new Date(new Date() + 1000 * 60 * 60));
    } catch (err) {
      console.log('error signing in: ', err)
    }
  }

  forgotpass = async () => {
    const { email } = this.state
    try {
      // here place your signup logic
      console.log('user: ', { email })
      fetch('http://192.168.43.44:3000/user-changePassword', {
        method: "PUT",
        body: JSON.stringify({ email }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })

    } catch (err) {
      console.log('error signing in: ', err)
    }
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#ffffff' }}
        showsVerticalScrollIndicator={false}>

        <ImageBackground source={require('../images/agenty-piste-big.jpg')}
          style={{
            height: Dimensions.get('window').height / 2.5,
          }}>
        </ImageBackground>

        <View style={styles.bottonView}>

          <View style={{ padding: 40 }}>

            <Text style={{ color: '#4632A1', fontSize: 34 }}>Authentification</Text>
            <Text> Veuillez remplir les deux champs (*)</Text>

            <View style={{ marginTop: 30 }}>
              <NativeBaseProvider>

                <Box w="100%">
                  <Text style={{ fontSize: 18, padding: 10 }}>Login</Text>
                  <Input
                    onChangeText={val => this.onChangeText('email', val)}
                    name='email'
                    InputRightElement={
                      <Icon
                        as={<MaterialIcons name="email" />}
                        size="md"
                        m={2}
                        _light={{
                          color: "black",
                        }}
                        _dark={{
                          color: "gray.300",
                        }}
                        style={{ color: '#4632A1' }}
                      />
                    }
                    placeholder="E-mail"
                    _light={{
                      placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50",
                    }}

                  />

                  <Text style={{ fontSize: 18, padding: 10 }}>Password</Text>
                  <Input
                    onChangeText={val => this.onChangeText('password', val)}
                    name='password'
                    secureTextEntry={true}
                    InputRightElement={
                      <Icon

                        as={<Ionicons name="eye" />}
                        size="md"
                        m={2}
                        _light={{
                          color: "black",
                        }}
                        _dark={{
                          color: "gray.300",
                        }}
                        style={{ color: '#4632A1' }}
                      />
                    }
                    placeholder="********" // mx={4}
                    _light={{
                      placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50",
                    }}
                  />
                </Box>
              </NativeBaseProvider>
            </View>

            <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={styles.submit} onPress={this.signIn}>
                <Text style={styles.submitText}>S'authentifier</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
              <TouchableOpacity onPress={this.forgotpass}>
                <Text style={{ color: '#8f9195', textAlign: 'center' }}>Password oublié !</Text>
              </TouchableOpacity>
            </View>


          </View>
        </View>

      </ScrollView>
    )
  };
}


const styles = StyleSheet.create({

  bottonView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,

  },

  submit: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#4632A1',
  },

  submitText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffffff',
  }



})
