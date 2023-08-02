import React, {useEffect} from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import axios from "axios";

const SingleCityScreen = ({ name, navigation}: {name?: string, navigation: any}) => {
    const anotherName = navigation.getParam("name");

    const apiKey = 'vJGCI8jAmBuS3klC4VA3AQ==5c9BrfkBlbztM9hG';
    useEffect(() => {
        axios.get(`https://api.api-ninjas.com/v1/city?name=${name}`, {
            headers: {
                'X-Api-Key': apiKey
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    }, []);

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}
export default SingleCityScreen;
