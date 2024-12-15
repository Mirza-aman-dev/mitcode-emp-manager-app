import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"; // Update import
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const firebaseConfig = {
    apiKey: "AIzaSyDAQIIZtQG3c6dmZc3fG8l2gOOkxSDGQj8",
    authDomain: "emitcode-29e46.firebaseapp.com",
    projectId: "emitcode-29e46",
    storageBucket: "emitcode-29e46.appspot.com",
    messagingSenderId: "351590579665",
    appId: "1:351590579665:web:157d16ed7310e05679f4f0",
    measurementId: "G-FCWK4TKFW9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);

// Initialize Auth with AsyncStorage for persistence
export const auth = initializeAuth(firebase, {
    persistence: getReactNativePersistence(AsyncStorage) // Set persistence
});
