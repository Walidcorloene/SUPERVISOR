

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'


class TacheItem extends React.Component {
  render() {
    const tache_pr = this.props.tache_pr
    const displayPrev = this.props.displayPrev
    return (
      <TouchableOpacity style={styles.main_container}
        onPress={() => displayPrev(tache_pr.id)}
      >

        <Image
          style={styles.image}
          source={require('../images/prévent.jpg')}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>Tâche préventive</Text>

          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{tache_pr.description}</Text>

          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Affectée le {tache_pr.date_affectation}</Text>

          </View>
          <View style={styles.heure_container}>
            <Text style={styles.heure_text}>Heure {tache_pr.heure}</Text>
          </View>
        </View>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {

  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  heure_container: {
    flex: 1
  },
  heure_text: {
    textAlign: 'right',
    fontSize: 14,

  },
})

export default TacheItem