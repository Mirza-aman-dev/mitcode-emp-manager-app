import { StyleSheet, Text, View,Modal, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { CameraView } from 'expo-camera';

const ModalView = (props) => {

    const {modelVisible,closeModal,ToggleScanner,onBarcodeScanned,scannedData} = props;

    return (
        <Modal visible={modelVisible} onRequestClose={closeModal} animationType='slide'>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20 }}>
                    <TouchableOpacity onPress={closeModal}>
                        <Ionicons name="close-outline" size={39} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, padding: 20 }}>
                    <CameraView
                        style={{ flex: 1, display: ToggleScanner }}
                        facing='back'
                        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
                        onBarcodeScanned={onBarcodeScanned}
                    />
                    {
                        ToggleScanner === 'none' ?
                            scannedData && (
                                <TouchableOpacity >
                                    <View style={styles.card}>
                                        <View style={styles.avatar}>
                                            <Image source={{ uri: scannedData.photoURL }} style={styles.img} />
                                        </View>
                                        <View style={styles.data}>
                                            <Text style={styles.cardTitle}>Name : {scannedData.name}</Text>
                                            <Text style={styles.cardTitle}>Phone : {scannedData.phone}</Text>
                                            <Text style={styles.cardTitle}>Email : {scannedData.email}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                            : null
                    }
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default ModalView

const styles = StyleSheet.create({
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
})