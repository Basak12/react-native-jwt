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

interface Images {
    url: string,
    alt: string
}

const ImageSlider = ({title, images}: {title?: string, images:Images[]} ) => {
    const scrollX = useRef(new Animated.Value(0)).current // Initial value for opacity: 0
    const {width: windowWidth} = Dimensions.get('window')

    return(
       <SafeAreaView style={styles.container}>
           <View style={styles.scrollContainer}>
               <Text style={styles.title}>Places to visit in {title}</Text>
               <ScrollView
                   horizontal={true}
                   pagingEnabled
                   showsHorizontalScrollIndicator={false}
                   onScroll={Animated.event([
                       {
                           nativeEvent: {
                               contentOffset: {
                                   x: scrollX,
                               },
                           },
                       },
                   ])}
                   scrollEventThrottle={1}>
                   {images.map((image, imageIndex) => {
                       return (
                           <View style={{width: windowWidth, height: 250}} key={imageIndex}>
                               <ImageBackground source={{uri: image.url}} style={styles.card}>
                                   <View style={styles.textContainer}>
                                       <Text style={styles.infoText}>
                                           {image.alt}
                                       </Text>
                                   </View>
                               </ImageBackground>
                           </View>
                       );
                   })}
               </ScrollView>
               <View style={styles.indicatorContainer}>
                   {images.map((image, imageIndex) => {
                       const width = scrollX.interpolate({
                           inputRange: [
                               windowWidth * (imageIndex - 1),
                               windowWidth * imageIndex,
                               windowWidth * (imageIndex + 1),
                           ],
                           outputRange: [8, 16, 8],
                           extrapolate: 'clamp',
                       });
                       return (
                           <Animated.View
                               key={imageIndex}
                               style={[styles.normalDot, {width}]}
                           />
                       );
                   })}
               </View>
           </View>
       </SafeAreaView>
    )
}
export default ImageSlider;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        marginVertical: 10,
    },
    scrollContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'silver',
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});