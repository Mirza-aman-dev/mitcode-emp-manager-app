import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window"); // Get the screen width and height

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fadeAnim] = useState(new Animated.Value(0));
  const [buttonAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Fade in effect for the login box
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // Button slide-up animation
    Animated.timing(buttonAnim, {
      toValue: 1,
      duration: 1500,
      delay: 600,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    console.log("Login Pressed");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust for iOS and Android
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[styles.loginBox, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Welcome Back!</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A0A3B1"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A0A3B1"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.buttonContainer,
            {
              transform: [
                {
                  translateY: buttonAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [150, 0], // Start 150px down and move up
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#168fc2", // Main background color
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20, // For better scrolling on smaller devices
  },
  loginBox: {
    width: width * 0.85, // Adjust width based on screen size
    paddingVertical: height * 0.04, // Responsive vertical padding
    paddingHorizontal: width * 0.05, // Responsive horizontal padding
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: width * 0.07, // Responsive font size
    color: "#168fc2",
    fontWeight: "bold",
    marginBottom: height * 0.03, // Responsive margin bottom
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: height * 0.02, // Responsive spacing between inputs
    fontSize: width * 0.04, // Responsive font size
    color: "#333",
  },
  buttonContainer: {
    marginTop: height * 0.02, // Responsive spacing from inputs
    width: width * 0.85,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#12c7ed", // Button color
    width: "100%",
    paddingVertical: height * 0.02, // Responsive padding
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: width * 0.045, // Responsive font size
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LoginScreen;
