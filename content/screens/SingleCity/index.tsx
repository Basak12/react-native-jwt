import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
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

  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/city?name=${name}`, {
        headers: {
          'X-Api-Key': apiKey,
        },
      })
      .then((response) => {
        setCityData(response.data);
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {cityData.map((city) => {
        return (
          <SafeAreaView style={styles.textContainer} key={city.name}>
            <View style={{ alignSelf: 'center', marginBottom: 20 }}>
              <Text style={{ fontSize: 20 }}>{name}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 16 }}>Country:</Text>
              <Text style={{ fontSize: 18 }}>{city.country}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 16 }}>Lat:</Text>
              <Text style={{ fontSize: 18 }}>{city.latitude.toString()}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 16 }}>Long:</Text>
              <Text style={{ fontSize: 18 }}>{city.longitude.toString()}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 16 }}>Population:</Text>
              <Text style={{ fontSize: 18 }}>{city.population.toString()}</Text>
            </View>
          </SafeAreaView>
        );
      })}
      <Image
        source={{ uri: url }}
        resizeMode="cover"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 300,
          height: 400,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

export default SingleCityScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 16,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: 'rgba(2,38,79,0.6)',
    borderWidth: 1,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    width: 300,
  },
  infoContainer: {
    borderBottomColor: 'rgba(2,38,79,0.3)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
