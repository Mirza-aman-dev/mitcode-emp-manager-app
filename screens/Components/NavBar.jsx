import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import logo from '../../assets/logo.png';
import { Ionicons } from '@expo/vector-icons';

export default function NavBar(props) {
    const {dataLength} = props;
    return (
        <View style={styles.navBar}>
            <Image source={logo} style={{ height: 40, width: 130 }} />
            <Text style={{fontSize:17,textAlign:'right',fontWeight:'500',color:'grey'}} > E-Cards : <Text style={{color:'black'}} >{dataLength}</Text></Text>
            <TouchableOpacity>
                <Ionicons name="grid-outline" size={26} color={'black'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'white',
        borderBottomWidth: 0.2,
    },
})