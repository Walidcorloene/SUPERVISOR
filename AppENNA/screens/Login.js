import React from 'react'
import { ScrollView, ImageBackground, Dimensions, Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Input, Icon, Box, NativeBaseProvider } from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { backgroundColor } from 'styled-system';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        email: "",
        password: ""
      }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: "khirdine.walid@gmail.com" })
  }

  pressAuthent = (e) => {
  //  const [name, setName] = useState(" ");
    //const [password, setPassword] = useState(" ");

    e.preventDefault();
    console.log("state: ", this.state.email)
    fetch("http://192.168.1.3:3000/user-signin", {
      method: "POST",

      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });
    this.props.navigation.navigate('Menu Principal')
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
                    onChange={(e) => this.handleChange(e)}
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
                    onChange={(e) => this.handleChange(e)}
                    name='password'
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
              <TouchableOpacity style={styles.submit} onPress={this.pressAuthent}>
                <Text style={styles.submitText}>S'authentifier</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
              <TouchableOpacity>
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
