import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import axios from "axios";
import {useRoute} from "@react-navigation/native";

interface cityData {
    name: string,
    latitude: number,
    longitude: number,
    country: string,
    population: number,
    isCapital: boolean
}

interface SingleCityProps{
    route?: any;
}

const SingleCityScreen: React.FC<SingleCityProps> = ({ route }) => {
    const apiKey = 'vJGCI8jAmBuS3klC4VA3AQ==5c9BrfkBlbztM9hG';
    const [cityData, setCityData] = useState<cityData[]>([]);
    const {name } = route.params;
    console.log("SingleCityScreen name:", name);

  useEffect(() => {
         axios.get(`https://api.api-ninjas.com/v1/city?name=${name}`, {
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
  }, []);

  if(!cityData) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
  }

    return (
        <View style={styles.container}>
            <Text>{cityData.map((city) => (
                <View key={city.name}>
                    <Text>
                        {city.name}
                    </Text>
                    <Text>
                        {city.country}
                    </Text>
                </View>
            ))}
            </Text>
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
