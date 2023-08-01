import React, {useEffect, useState, useRef} from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ImageBackground} from "react-native";
import {useAuth, API_URL} from "../../context/AuthContext";
import axios from "axios";
import Animated, {FadeOutUp, FadeInUp} from "react-native-reanimated";
const SplashScreen = ({navigation}: any) => {
    const { authState } = useAuth();

    useEffect(() => {
        const navigateToScreen = () => {
            if (authState?.authenticated) {
                navigation.navigate("Home");
            } else {
                navigation.navigate("Login");
            }
        };
        const timeout = setTimeout(navigateToScreen, 2000);

        return () => clearTimeout(timeout);
    }, [authState, navigation]);

    return (
        <Animated.View
            exiting={FadeOutUp}
            entering={FadeInUp.duration(1000)}
            style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
            }}
        >
        <ImageBackground source={require('../../../assets/splashScreen7.jpg')} resizeMode='cover' style = {{
            width: '100%',
            height: '100%'
        }}/>
        </Animated.View>
    )
};

export default SplashScreen;
