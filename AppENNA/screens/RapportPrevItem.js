import React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Button } from 'react-native'


export default class RapportPrevItem extends React.Component{

    render(){
      const consult_tache_pr = this.props.consult_tache_pr
        return(
           
            <View style={styles.main_container}>
            <Image
          style={styles.image}
          source={require('../images/unnamed.png')}
        />

           <View style={styles.content_container}>

            <View style={styles.header_container}>
             <Text style={styles.date_realisation_text}>Réaliser le {consult_tache_pr.date_realisation}</Text>
             <Text style={styles.date_heure_text} >H_debut {consult_tache_pr.heure_debut}</Text>
             <Text style={styles.date_heure_text}>Durée de l'intervention {consult_tache_pr.duree}</Text>
            </View>
            
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>Opérations :{consult_tache_pr.description}</Text>
            </View>

            <View style={styles.ingenieur_container}>
            <Text style={styles.ingenieur_text}>Intervenats : {consult_tache_pr.ingenieur}</Text>
            </View>
            
            <TouchableOpacity style={styles.btn_pdf}>
             <Text style={{color:'red',fontWeight:'bold'}}>Générer PDF Détaillé</Text>
            </TouchableOpacity>
            
           </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 200,
    flexDirection: 'row'
  },
  content_container:{
    flex:1,
    margin:5
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  header_container:{
      padding:3,
  },
  date_realisation_text:{
   fontWeight:'bold',
   fontSize:16
  },
  date_heure_text:{
   color:'#666666'   
  },
  description_container:{
    flex:7,
  },
  description_text:{
    fontStyle: 'italic',
    fontWeight:'bold'
  },
  ingenieur_container:{
      flex:7
  },
  ingenieur_text:{
      color:'#666666'  
  },
  btn_pdf:{
      flex:7,
      alignItems:'center',
      justifyContent:"center",
      backgroundColor:'#fff',
      borderRadius:30,
      elevation:10,
      marginBottom:10,
      marginLeft:20,
      marginRight:20
  }

  

}
)