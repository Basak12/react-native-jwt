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

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + ' M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + ' K';
    }
    return num.toString();
  };

  const convertToCountryName = (country: string) => {
    if (country === 'US') {
      return 'United States';
    } else if (country === 'GB') {
      return 'United Kingdom';
    } else if (country === 'FR') {
      return 'France';
    } else if (country === 'IT') {
      return 'Italy';
    } else if (country === 'PH') {
      return 'Philippines';
    } else if (country === 'JP') {
      return 'Japan';
    } else if (country === 'ID') {
      return 'Indonesia';
    } else if (country === 'TW') {
      return 'Taiwan';
    }
    return country;
  };

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
        console.error('Request failed in single city component:', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {cityData.map((city) => {
        return (
          <SafeAreaView style={styles.textContainer} key={city.name}>
            <View
              style={{ alignSelf: 'center', marginBottom: 20, marginTop: 20 }}
            >
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                {city.name}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 16, color: '#686b6c' }}>Country:</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>
                {convertToCountryName(city.country)}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 16, color: '#686b6c' }}>Lat:</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>
                {city.latitude}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 16, color: '#686b6c' }}>Long:</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>
                {city.longitude}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 16, color: '#686b6c' }}>
                Population:
              </Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>
                {formatNumber(city.population)}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}
            >
              <Image
                source={{ uri: url }}
                resizeMode="cover"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 300,
                  height: 380,
                  borderRadius: 8,
                }}
              />
            </View>
          </SafeAreaView>
        );
      })}
    </SafeAreaView>
  );
};

export default SingleCityScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    //backgroundColor: 'rgba(255,255,255,0.9)',
  },
  textContainer: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 8,
    padding: 20,
    width: 350,
    height: 650,
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: 'rgba(2,38,79,0.6)',
  },
  infoContainer: {
    borderBottomColor: 'rgba(2,38,79,0.3)',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
