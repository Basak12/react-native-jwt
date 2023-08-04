import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

interface cityData {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  population: number;
  isCapital: boolean;
}

interface SingleCityProps {
  route?: any;
}

const SingleCityScreen: React.FC<SingleCityProps> = ({ route }) => {
  const apiKey = 'vJGCI8jAmBuS3klC4VA3AQ==5c9BrfkBlbztM9hG';
  const [cityData, setCityData] = useState<cityData[]>([]);
  const { name, url } = route.params;
  console.log('SingleCityScreen name:', name);

  /*
    useEffect(() => {
         axios.get(`https://api.api-ninjas.com/v1/city?name=London`, {
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
*/

  return (
    <View style={styles.container}>
      <View>
        <Text>London</Text>
        <Text>UK</Text>
        <Text>lat</Text>
        <Text>long</Text>
        <Text>population</Text>
        <Text>isCapital</Text>
      </View>
    </View>
  );
};

export default SingleCityScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
