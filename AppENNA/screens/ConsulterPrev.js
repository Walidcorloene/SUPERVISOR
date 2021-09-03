import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import dataPrev from '../helpers/consulterDataPrev';
import RapportPrevItem from './RapportPrevItem';
import { NativeBaseProvider, Box, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class ConsulterPrev extends React.Component {

    render() {

        return (


            <View>

                <FlatList

                    data={dataPrev}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <RapportPrevItem consult_tache_pr={item} />}
                />

            </View>

        )
    }
}