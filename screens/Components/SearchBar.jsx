import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = (props) => {

    const { searchIcon, handleSearch } = props;

    return (
        <View style={styles.SearchBar}>
            {
                searchIcon === '' ? (
                    <Ionicons name="search-outline" size={19} color="black" />
                ) : (
                    <TouchableOpacity onPress={() => handleSearch('')}>
                        <Ionicons name="close-outline" size={19} color="black" />
                    </TouchableOpacity>
                )
            }
            <TextInput
                placeholder="Search for Employee.."
                style={styles.searchInput}
                value={searchIcon} // Ensure the input reflects the current state
                onChangeText={handleSearch} // Update the state as the user types
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    SearchBar: {
        backgroundColor: 'white',
        width: '80%',
        height: '90%',
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 12,
        borderWidth: 1,
    },
    searchInput: {
        width: '100%',
        flex: 1,
        padding: 10,
    },
})