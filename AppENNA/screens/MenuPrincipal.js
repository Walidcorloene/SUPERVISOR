import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet,View,FlatList,Text,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons,MaterialIcons,FontAwesome5 } from '@expo/vector-icons';
import {
  Menu,
  Button,
  VStack,
  NativeBaseProvider,
  Box,
  Icon,
  Divider
} from "native-base";
import dataTache from '../helpers/tacheData';
import TacheItem from './TacheItem';


export default class MenuPrincipal extends React.Component{
   
_displayPrev =(id) =>{
  this.props.navigation.navigate("Rapport Preventive")
}
   
  render(){

   const navigation = this.props.navigation
      
   
    return(
    
     <NativeBaseProvider>

      <Box style={{flexDirection:'row-reverse',marginBottom:10}}>
    <TouchableOpacity>
       <Icon 
          
            as={<MaterialCommunityIcons name="exit-run" />}
            
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

     <VStack>
        <Box style={{marginLeft:30,marginRight:30}}>
        <Menu
       
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps} style={{borderRadius:10,elevation:6,backgroundColor:'#fff'}}>
             <Text style={{color:'#4632A1',fontWeight:'bold',fontSize:16}}> Créer Rapport Tâche Corrective</Text>
            </Button>
          )
        }}
      >
        <Menu.Item onPress={()=>{navigation.navigate("Rapport Corrective")}}>Créer Rapport</Menu.Item>
        <Divider/>
        <Menu.Item>Demander Aide</Menu.Item>
        
      </Menu>
        </Box>

        <Box style={{marginTop:20,marginLeft:30,marginRight:30}}>
        <Menu
       
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps} style={{borderRadius:10,elevation:6,backgroundColor:'#fff'}}>
             <Text style={{color:'#4632A1',fontWeight:'bold',fontSize:16}}>Modifier Rapports Tâches</Text>
            </Button>
          )
        }}
      >
        <Menu.Item>Tâche Corrective</Menu.Item>
        <Divider/>
        <Menu.Item>Tâche Préventive</Menu.Item>
        
      </Menu>
        </Box>

         <Box style={{marginTop:20,marginLeft:30,marginRight:30}}>
        <Menu
        
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps} style={{borderRadius:10,elevation:6,backgroundColor:'#fff'}}>
             <Text style={{color:'#4632A1',fontWeight:'bold',fontSize:16}}>Consulter</Text>
            </Button>
          )
        }}
      >
        <Menu.Item onPress={()=>{navigation.navigate("Consulter Preventive")}}>Rapports Tâches Preventives</Menu.Item>
        <Divider/>
        <Menu.Item>Rapports Tâches Correvtives</Menu.Item>
        <Divider/>
        <Menu.Item>NOTAM</Menu.Item>
        
      </Menu>
      </Box>

    </VStack>

       <View style={{marginTop:30,justifyContent:'center',
        alignItems:'center',backgroundColor:'#fff', height:50,elevation:3}}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#4632A1'}}>Listes des Tâches préventives </Text>
        </View>

        <View style={{marginTop:30, flex:1}} onPress={()=>{this.props.navigation.navigate("Rapport Preventive")}}>
        
        <FlatList 
        
        data={dataTache}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <TacheItem tache_pr={item} displayPrev={this._displayPrev}/>}
        />
       
        </View>
     </NativeBaseProvider>

    
    
   
    
    );
};
}


