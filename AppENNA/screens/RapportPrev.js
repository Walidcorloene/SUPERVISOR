import React from 'react';
import { ScrollView,TouchableOpacity } from 'react-native';
import { TextInput} from 'react-native-paper';
import {
  Button,
  VStack,
  Select,
  CheckIcon,
  Box,
  NativeBaseProvider,
  Popover,
  Text,
  Icon
} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default class RapportPrev extends React.Component{

    render(){
        const navigation = this.props.navigation;
        return(
        <NativeBaseProvider>
        <ScrollView>
        <Box style={{padding:10}}>
        <Box style={{flexDirection:'row-reverse'}}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Menu Principal')}}>
       <Icon 
          
            as={<MaterialCommunityIcons name="home-circle" />}
            
            size="md"
            m={2}
            _light={{
              color: "black",
            }}
            _dark={{
              color: "gray.300",
            }}
            style={{color:'#4632A1'}} 
          />
          
          </TouchableOpacity>
        </Box>
          
        <VStack space={6} alignSelf="flex-start" w="100%">

        <Select
       
        placeholder={'Lieux'}
        mx={{
          base: 0,
          md: "auto",
        }}
        
        _selectedItem={{
          bg: "#4632A1",
          endIcon: <CheckIcon size={4} />,
        }}
        accessibilityLabel="Atelier"
      >
        <Select.Item label="Piste C1" value="Piste C1" />
        <Select.Item label="Piste C2" value="Piste C2" />
        <Select.Item label="Runway" value="Runway" />
        <Select.Item label="Centrale" value="Centrale" />
        <Select.Item label="CVOR" value="CVOR" />
        <Select.Item label="NDB" value="NDB" />
        <Select.Item label="GP/ILS" value="GP/ILS" />
        <Select.Item label="LOC" value="LOC" />
        <Select.Item label="Mache a Vent" value="Mache a Vent" />
        <Select.Item label="Salle Radio" value="Salle Radio" />
        <Select.Item label="Bloc Technique" value="Bloc Technique" />
        <Select.Item label="Parking Avion" value="Parking Avion" />
        <Select.Item label="Autre" value="Autre" />
        
      </Select>

       <Select
        placeholder={'Equipement'}
        mx={{
          base: 0,
          md: "auto",
        }}
        
        _selectedItem={{
          bg: "#4632A1",
          endIcon: <CheckIcon size={4} />,
        }}
        accessibilityLabel="equipement"
      >
        <Select.Item label="Circuit Balisage C1" value="Circuit Balisage C1" />
        <Select.Item label="Circuit Balisage C2" value="Circuit Balisage C2" />
        <Select.Item label="Cercuit PAPI 26" value="Cercuit PAPI 26" />
        <Select.Item label="Cercuit PAPI 08" value="Cercuit PAPI 08" />
        <Select.Item label="CVOR" value="CVOR" />
        <Select.Item label="NDB" value="NDB" />
        <Select.Item label="GP/ILS" value="GP/ILS" />
        <Select.Item label="LOC" value="LOC" />
        <Select.Item label="Mache a Vent" value="Mache a Vent" />
        <Select.Item label="Phare Aéronautique" value="Phare Aéronautique" />
        <Select.Item label="Post MT" value="Post MT" />
        <Select.Item label="Armoire élec Centrale" value="Armoire élec Centrale" />
        <Select.Item label="RCC" value="RCC" />
        <Select.Item label="G1" value="G1" />
        <Select.Item label="G2" value="G2" />
        <Select.Item label="Feux d'Obstacle TWR" value="Feux d'Obstacle TWR" />
      </Select>
      </VStack>
         <Box style={{marginTop:10}}>
    <TextInput
      mode={'outlined'}
      label="Anomalies_Constatées_Réparées"
      multiline={true}
      
    />
    </Box>
    <Box style={{marginTop:10}}>
    <TextInput
     mode={'outlined'}
     label="Piéces_Remplacées"
     multiline={true}
      
    />
    </Box>

    <Box style={{marginTop:10}}>
    <TextInput
     mode={'outlined'}
     label="Restrictions"
     multiline={true}
      
    />
    </Box>
        <Box style={{marginTop:10}}>
    <TextInput
     mode={'outlined'}
     label="Outillage_Documentation"
     multiline={true}
      
    />
    </Box>
    <Box style={{marginTop:20}}>
    <VStack>
     <Select
        placeholder={'Etat_de_la_Station'}
        mx={{
          base: 0,
          md: "auto",
        }}
        
        _selectedItem={{
          bg: "#4632A1",
          endIcon: <CheckIcon size={4} />,
        }}
        accessibilityLabel="Etat de la Station"
      >
        <Select.Item label="Sans_Restriction" value="Sans_Restriction" />
        <Select.Item label="Avec_Restriction" value="Avec_Restriction" />
        <Select.Item label="Inutilisable" value="Inutilisable" />
        </Select>
    </VStack>
    </Box>

    <Box style={{marginTop:10}}>
     <TextInput
     mode={'outlined'}
     label="Traveaux_effectués"
     multiline={true}
    />
    </Box>

    <Box style={{padding:20}}>
      <Popover
      trigger={(triggerProps) => {
        return <Button {...triggerProps} style={{borderRadius:30,elevation:3,backgroundColor:'#4632A1'}}>
        <Text style={{fontWeight:'bold',fontSize:18,color:"#fff"}}>Valider</Text></Button>
      }}
    >
      <Popover.Content accessibilityLabel="valider" >
        <Popover.Arrow />
        <Popover.CloseButton />
        <Popover.Header>Confirmation</Popover.Header>
        <Popover.Body>
          Vous etre sur de vouloir généré le Rapport ?
        </Popover.Body>
        <Popover.Footer justifyContent="flex-end">
          <Button.Group>
           
            <Button size="sm">Confirmer</Button>
          </Button.Group>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
    </Box>
     

        </Box>
        </ScrollView>
        </NativeBaseProvider>
        );
    }
}