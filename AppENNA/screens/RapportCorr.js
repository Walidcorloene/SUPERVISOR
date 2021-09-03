import React from 'react';
import { ScrollView,TouchableOpacity} from 'react-native';
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



export default class RapportCorr extends React.Component{
  
    

   render(){
    const navigation = this.props.navigation  
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
      label="Anomalies_Constatées"
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

    <Box style={{marginTop:20}}>
    <VStack>
    <Select
        placeholder={'Ref_Manip'}
        mx={{
          base: 0,
          md: "auto",
        }}
        
        _selectedItem={{
          bg: "#4632A1",
          endIcon: <CheckIcon size={4} />,
        }}
        accessibilityLabel="Ref_Manip"
      >
        <Select.Item label="Test d'isoloment" value="Test d'isoloment" />
        <Select.Item label="Mesure de Terre" value="Mesure de Terre" />
        <Select.Item label="Chang transfo iso 45W" value="Changement transfo iso 45W" />
        <Select.Item label="Chang transfo iso 150W" value="Changement transfo iso 150W" />
        <Select.Item label="Chang transfo iso 200W" value="Changement transfo iso 200W" />
        <Select.Item label="Chang lampe 100w/6.6A" value="Changer lampe 100w/6.6A" />
        <Select.Item label="Chang lampe 200w/6.6A" value="Changer lampe 200w/6.6A" />
        <Select.Item label="Chang lampe 45w/6.6A" value="Changer lampe 45w/6.6A" />
        <Select.Item label="Chang fiche mal kd500.1" value="Changement fiche mal kd500.1" />
        <Select.Item label="Chang fiche femelle kd500.1" value="Changement fiche femelle kd500.1" />
        <Select.Item label="Chang cartouche fitre a air" value="Changement kartouche filtre a air" />
        <Select.Item label="Chang filtre dérivation huile" value="Changement filtre dérivation huile" />
        <Select.Item label="Chang filtre a carburant" value="Changement filtre a carburant" />
        <Select.Item label="Chang poulie tension" value="Changement poulie tension"  />
        <Select.Item label="Chang reniflerd carter moteur" value="Chang reniflerd carter moteur"  />
        <Select.Item label="Chang cartouche fitre a l'huile" value="Chang cartouche fitre a l'huile"/> 
        <Select.Item label="Chang courroie alternateur" value="Chang courroie alternateur"/>
        <Select.Item label="Chang carte mére RCC" value="Chang carte mére RCC"/>
        <Select.Item label="Chang carte télécommande RCC" value="Chang carte télécommande RCC"/>
        <Select.Item label="Chang carte defaut de  RCC" value="Chang carte defaut de RCC"/>
        <Select.Item label="Chang fusible" value="Chang fusible"/>
        <Select.Item label="Chang relais" value="Chang relais"/>
        <Select.Item label="Chang filererie" value="Chang filererie"/>
        <Select.Item label="Chang cable éléctarique" value="Chang cable éléctarique"/>
        <Select.Item label="Chang cable coaxial" value="Chang cable coaxial"/>
      </Select>

      <Box style={{marginTop:20}}>
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
        </Box>
    </VStack>
    </Box>
    
    <Box style={{marginTop:10}}>
     <TextInput
     mode={'outlined'}
     label="Opérations_effectuées"
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
      )
   }
}


