import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./content/context/AuthContext";
import HomeScreen from "./content/screens/Home";
import LoginScreen from "./content/screens/Login";
import SplashScreen from "./content/screens/Splash";
import RegisterScreen from "./content/screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <Layout />
        </AuthProvider>
    );
}

const Layout = () => {
    const { authState, onLogout } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {authState?.authenticated ? (
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerRight: () => (
                                <TouchableOpacity onPress={onLogout} style={styles.logout}>
                                    <Text style={{ color: "#fff" }}>Logout</Text>
                                </TouchableOpacity>
                            ),
                            headerStyle: {
                                backgroundColor: "rgb(49,57,152)",
                            },
                            headerTintColor: "#fff",
                        }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="Splash"
                            component={SplashScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{ headerShown: false }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    logout: {
        color: "#fff",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "rgba(94,105,238,0.3)",
    },
});
