import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import axios from "axios";

const SingleCityScreen = ({ navigation, name }: { name?: string; navigation?: any }) => {
    const apiKey = 'vJGCI8jAmBuS3klC4VA3AQ==5c9BrfkBlbztM9hG';
    const [cityData, setCityData] = useState<any>(null);


    console.log(name)
    useEffect(() => {
        if (name) {
            axios
                .get(`https://api.api-ninjas.com/v1/city?name=${name}`, {
                    headers: {
                        'X-Api-Key': apiKey
                    }
                })
                .then(response => {
                    setCityData(response.data);
                })
                .catch(error => {
                    console.error('Request failed:', error);
                });
        }
    }, [name]);

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>this is the city screen, there is no typo mistake</Text>
            {cityData && (
                <View>
                    <Text>City Info:</Text>
                </View>
            )}
        </View>
    );
};

export default SingleCityScreen;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
});
