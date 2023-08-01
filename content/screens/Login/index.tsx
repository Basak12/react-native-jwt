import React, {useEffect, useState, useRef} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    ImageBackground,
} from "react-native";
import {useAuth, API_URL} from "../../context/AuthContext";
import axios from "axios";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Reanimated from "../../animations/Reanimated";
import Animated, {FadeOutUp, FadeInUp} from "react-native-reanimated";

const LoginScreen = ({navigation}: any) => {
    const[email, setEmail] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const {onLogin, onRegister} = useAuth();

    useEffect(() => {
        const testCall = async () => {
            const result = await axios.get(`${API_URL}/users`);
        };
        testCall();
    }, []);

    const handleLogin = async () => {
        const result = await onLogin!(email, password); // ! mark means that we are sure that this value is not null
        if (result && result.error){
            alert(result.msg);
        }
    };

    return (
        <ImageBackground source={require('../../../assets/splashScreen7.jpg')} resizeMode='cover' style = {{
            justifyContent: 'center',
            width: '100%',
            height: '100%'
        }}>
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.container}
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                >
                        <View style={styles.container}>
                            <Animated.View style={styles.image} exiting={FadeOutUp}
                                           entering={FadeInUp.duration(1000)}>
                                <Image source={require('../../../assets/logo3.png')} style = {styles.image}/>
                            </Animated.View>
                            <View style={styles.form}>
                                <TextInput style={styles.input} placeholder="Email" onChangeText={(e: string) => setEmail(e)} value={email}/>
                                <TextInput style={styles.input} placeholder="Password" onChangeText={(e: string) => setPassword(e)} value={password} secureTextEntry={true}/>
                            </View>
                            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                                <Text style = {{color: 'white',fontSize: 16, fontWeight: '800'}}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                                <Text style = {{color: 'white',fontSize: 16, fontWeight: '800'}}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                </KeyboardAwareScrollView>
        </ImageBackground>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    form: {
        gap: 10,
        width: '70%',
    },
    image: {
        width: 120,
        height: 100,
    },
    input: {
        height: 44,
        borderRadius: 4,
        padding: 10,
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
    button: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
})