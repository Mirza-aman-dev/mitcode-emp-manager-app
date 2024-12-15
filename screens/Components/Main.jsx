import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Main = (props) => {

    const { filteredDetails } = props;

    return (
        <View style={styles.main}>
            <ScrollView style={styles.ScrollView} contentContainerStyle={{ alignItems: 'center' }}>
                {
                    filteredDetails.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <View style={styles.card}>
                                    <View style={styles.avatar}>
                                        <Image source={{ uri: item.photoURL }} style={styles.img} />
                                    </View>
                                    <View style={styles.data}>
                                        <Text style={styles.cardTitle}>Name : {item.name}</Text>
                                        <Text style={styles.cardTitle}>Phone : {item.phone}</Text>
                                        <Text style={styles.cardTitle}>Email : {item.email}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        marginBottom: 10,
        marginTop: 15,
        padding: 10,
    },
    card: {
        width: '99%',
        height: 150,
        backgroundColor: 'white',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 40,
        borderWidth: 0.3,
        marginTop: 15,
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 45,
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 45,
    },
    data: {
        padding: 10,
    },
    cardTitle: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    ScrollView: {
        flex: 1,
      },
})