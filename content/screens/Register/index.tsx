import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ImageBackground} from "react-native";
import {useAuth, API_URL} from "../../context/AuthContext";
import Animated, {FadeOutUp, FadeInUp} from "react-native-reanimated";
import axios from "axios";
const RegisterScreen = () => {

    const[email, setEmail] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const {onLogin, onRegister} = useAuth();

    const handleLogin = async () => {
        const result = await onLogin!(email, password); // ! mark means that we are sure that this value is not null
        if (result && result.error){
            alert(result.msg);
        }
    };

    const handleRegister = async () => {
        const result = await onRegister!(email, password);
        if (result && result.error){
            alert(result.msg);
        }else{
            await handleLogin();
        }
    };

    return (
        <Animated.View exiting={FadeOutUp} entering={FadeInUp}     style={styles.container}>
        <ImageBackground source={require('../../../assets/splashScreen2.jpeg')} resizeMode='cover' style={ {
            flex: 1,
            justifyContent: 'center',
            width: '100%',
            height: '100%'
        }}>
            <View style={styles.container}>
                <Image source={require('../../../assets/logo3.png')} style = {styles.image}/>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Email" onChangeText={(e: string) => setEmail(e)} value={email}/>
                    <TextInput style={styles.input} placeholder="Password" onChangeText={(e: string) => setPassword(e)} value={password} secureTextEntry={true}/>
                </View>
                <TouchableOpacity onPress={handleRegister} style={styles.button}>
                    <Text style = {{color: 'white',fontSize: 16, fontWeight: '800'}}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </Animated.View>
    )};

export default RegisterScreen;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    form: {
        gap: 10,
        width: '70%',
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1,
    },
    image: {
        width: 120,
        height: 100,
        marginBottom: 20,
    },
});
