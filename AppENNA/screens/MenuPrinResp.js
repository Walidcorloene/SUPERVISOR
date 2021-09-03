import * as React from 'react';
import {Text} from 'react-native';
import { TextInput} from 'react-native-paper';
import {
  Menu,
  Button,
  VStack,
  NativeBaseProvider,
  Box,
  Divider,
  ScrollView,
  Popover
} from "native-base";
import MultiSelect from 'react-native-multiple-select';

const items = [{
    id: '92iijs7yta',
    name: 'Skander Ladjouze'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Walid Khirdine'
  }, {
    id: '16hbajsabsd',
    name: 'Mazigh Boume'
  }, {
    id: 'nahs75a5sg',
    name: 'Ali Boumessila'
  }, {
    id: '667atsas',
    name: 'Ali Taher'
  }, {
    id: 'hsyasajs',
    name: 'Massi Bourai'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Mounir Allouache'
  }, {
    id: 'suudydjsjd',
    name: 'Hichem Hamaddache'
    } 
];


export default class MenuPrinResp extends React.Component{
               

    state = {
    selectedItems : []
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

    render(){
          const { selectedItems } = this.state;
        return(
           
            <NativeBaseProvider>
             <ScrollView>
            <Box style={{marginTop:20,marginLeft:30,marginRight:30}}>
            <Button style={{borderRadius:10,elevation:6,backgroundColor:'#fff'}}>
            <Text style={{color:'#4632A1',fontWeight:'bold',fontSize:16}}>Ajouter NOTAM</Text></Button>
            </Box>

            <Box style={{marginTop:20,marginLeft:30,marginRight:30}}>
            <Button style={{borderRadius:10,elevation:6,backgroundColor:'#fff'}}>
            <Text style={{color:'#4632A1',fontWeight:'bold',fontSize:16}}>Gestion des comptes</Text></Button>
            </Box>

            <VStack>
            <Box style={{marginLeft:30,marginRight:30,marginTop:20}}>
        <Menu
       
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps} style={{borderRadius:10,elevation:6,backgroundColor:'#fff'}}>
             <Text style={{color:'#4632A1',fontWeight:'bold',fontSize:16}}> Consulter Rapports</Text>
            </Button>
          )
        }}
      >
        <Menu.Item>Tâche Corrective</Menu.Item>
        <Divider/>
        <Menu.Item>Tâche Preventive</Menu.Item>
        
      </Menu>
      </Box>
      </VStack>
           
            <Box style={{marginTop:30,justifyContent:'center',
             alignItems:'center',backgroundColor:'#fff', height:50,elevation:3}}>
             <Text style={{fontWeight:'bold',fontSize:20,color:'#4632A1'}}>Affecter Tâches préventives </Text>
             </Box>

            
            
           
              
               <Box style={{padding:10,flex:14}}>
               <TextInput
                mode={'outlined'}
                label="Description_Tâche"
                 multiline={true}     
                />
          
           <Box style={{marginTop:20}}>
                <MultiSelect 
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Choisir des Invervenants"
          searchInputPlaceholderText="Recherche Intervenants..."
          onChangeInput={ (text)=> console.log(text)}
          tagRemoveIconColor="#4632A1"
          tagBorderColor="#4632A1"
          tagTextColor="#000"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#4632A1"
          submitButtonText="Selectionner"
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
          etes vous sur de vouloir affecter la tâche ?
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