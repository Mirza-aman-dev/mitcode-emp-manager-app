import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar';
import { Ionicons } from '@expo/vector-icons';
import ModalView from './ModalView';

const QuickActions = (props) => {
    const {searchIcon,handleSearch,setModelVisible,modelVisible,closeModal,ToggleScanner,onBarcodeScanned,scannedData} = props;
    return (
        <View style={styles.quickActions}>
            <SearchBar searchIcon={searchIcon} handleSearch={handleSearch} />
            <TouchableOpacity onPress={() => setModelVisible(true)}>
                <Ionicons name="scan-outline" size={35} color={'black'} />
            </TouchableOpacity>
            <ModalView modelVisible={modelVisible} closeModal={closeModal} ToggleScanner={ToggleScanner} onBarcodeScanned={onBarcodeScanned} scannedData={scannedData} />
        </View>
    )
}

export default QuickActions

const styles = StyleSheet.create({
    quickActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15,
        height: 45,
      },
})