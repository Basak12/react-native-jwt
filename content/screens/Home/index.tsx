import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Animated,
    Dimensions,
    SafeAreaView,
    ImageBackground,
    Button
} from "react-native";
import ImageSlider from "../../components/ImageSlider";

const HomeScreen = () => {
    const americaImages = [
        {
            url: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'San Francisco'
        },
        {
            url: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'New York'
        },
        {
            url: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'Las Vegas'
        },
        {
            url: 'https://images.unsplash.com/photo-1609924211018-5526c55bad5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            alt: 'Los Angeles'
        },
    ]
    const europeImages = [
        {
            url: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
            alt: 'London'
        },
        {
            url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
            alt: 'Paris'
        },
        {
            url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1096&q=80',
            alt: 'Rome'
        },
        {
            url: 'https://images.unsplash.com/photo-1545157000-85f257f7b040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'Venice'
        }
        ]
    const asiaImages = [
        {
            url: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            alt: 'Philippines'
        },
        {
            url:'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'Japan'
        },
        {
            url:'https://images.unsplash.com/photo-1557093793-e196ae071479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'Indonesia'
        },
        {
            url:'https://images.unsplash.com/photo-1598935898639-81586f7d2129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            alt: 'Taiwan'
        }
        ]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageSlider images={americaImages} title = 'America'/>
                <ImageSlider images={europeImages} title = 'Europe'/>
                <ImageSlider images={asiaImages} title = 'Asia'/>
            </ScrollView>
        </SafeAreaView>
    )
};

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
});