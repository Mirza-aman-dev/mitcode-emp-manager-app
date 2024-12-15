import { ActivityIndicator, Modal, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
import { useCameraPermissions, CameraView } from 'expo-camera';

// COMPONENTS
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import QuickActions from './Components/QuickActions';

const HomeScreen = () => {
  const [searchIcon, setSearchIcon] = useState('');
  const [modelVisible, setModelVisible] = useState(false);
  const [scannedData, setScannedData] = useState({});
  const [eDetails, setEDetails] = useState([]);
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [permission, requestPermission] = useCameraPermissions();
  const [ToggleScanner, setToggleScanner] = useState('flex');

  const fetchEDetails = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "eDetails"));
      const detailsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return detailsArray;
    } catch (error) {
      console.error("Error fetching eDetails:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEDetails();
      setEDetails(data); // Set the fetched data
      setFilteredDetails(data); // Initialize the filtered data
      setLoading(false);  // Update loading state
    };

    loadData(); // Call the loadData function
  }, []);

  useEffect(() => {
    if (permission && !permission.granted) {
      requestPermission();
    }
  }, [permission]);

  // Check for permission
  if (!permission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const onBarcodeScanned = async ({ data }) => {
    setToggleScanner('none'); // Close the modal
    try {
      const docRef = doc(db, "eDetails", data); // Use the scanned data as the doc ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const employeeData = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setScannedData(employeeData); // Store the fetched employee data
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const closeModal = () => {
    setModelVisible(false)
    setToggleScanner('flex')
  }

  const handleSearch = (text) => {
    setSearchIcon(text); // Update the search input
    if (text === '') {
      setFilteredDetails(eDetails); // If search box is cleared, show all details
    } else {
      const filteredData = eDetails.filter(item => 
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredDetails(filteredData); // Update the filtered data
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <NavBar dataLength={eDetails.length} />
        <QuickActions searchIcon={searchIcon} handleSearch={handleSearch} setModelVisible={setModelVisible} modelVisible={modelVisible}
          closeModal={closeModal} ToggleScanner={ToggleScanner} onBarcodeScanned={onBarcodeScanned} scannedData={scannedData}
        />
        <Main filteredDetails={filteredDetails} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
