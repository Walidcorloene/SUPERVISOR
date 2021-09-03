import * as React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeBaseProvider, Box, Radio, Button, Popover } from 'native-base';



export default class GestionUserAjout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 'ingenieur' };
    this.state = { setValue: 'ingenieur' }
  };


  render() {

    const value = this.props.value;

    return (

      <NativeBaseProvider>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4632A1' }}>Création Compte Utilisateur</Text>
          <Text> Veuillez remplir tous les champs (*)</Text>
        </View>

        <Box style={{ padding: 10 }}>
          <TextInput
            mode={'outlined'}
            label="Nom"
            multiline={true}
            placeholder={"mon npmm"}
          />

          <TextInput
            mode={'outlined'}
            label="Prénom"
            multiline={true}
          />

          <TextInput
            placeholder={"MyName@gmail.com"}
            mode={'outlined'}
            label="E-mail"
            multiline={true}
          />

          <TextInput
            mode={'outlined'}
            label="Login"
            multiline={true}
          />
          <TextInput
            placeholder={"*********"}
            mode={'outlined'}
            label="Mot de Passe"
            multiline={true}
          />

        </Box>

        <View style={{ padding: 10 }}>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="role"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue)
            }}
          >
            <Radio value="ingenieur" my={1}>
              Ingénieur
            </Radio>
            <Radio value="responsable" my={1}>
              Responsable
            </Radio>
          </Radio.Group>
        </View>

        <Box style={{ padding: 20 }}>
          <Popover
            trigger={(triggerProps) => {
              return <Button {...triggerProps} style={{ borderRadius: 30, elevation: 3, backgroundColor: '#4632A1' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#fff" }}>Valider</Text></Button>
            }}
          >
            <Popover.Content accessibilityLabel="valider" >
              <Popover.Arrow />
              <Popover.CloseButton />
              <Popover.Header>Confirmation</Popover.Header>
              <Popover.Body>
                etes vous sur de vouloir créé le compte ?
              </Popover.Body>
              <Popover.Footer justifyContent="flex-end">
                <Button.Group>

                  <Button size="sm">Confirmer</Button>
                </Button.Group>
              </Popover.Footer>
            </Popover.Content>
          </Popover>
        </Box>





      </NativeBaseProvider>
    )
  }
}