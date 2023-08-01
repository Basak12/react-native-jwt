import React, {useEffect, useState} from "react";
import {Animated} from "react-native";

const ScaleInView = (props?:any) => {
    const [scaleAnim] = useState(new Animated.Value(0))  // Initial value for scale: 0

    useEffect(() => {
        Animated.spring(
            scaleAnim,
            {
                toValue: 1, // return to same size
                friction: 3,
                useNativeDriver: true, // Add This line to make it work in Android devices
            }
        ).start();
    }, [])

    return (
        <Animated.View
            style={{
                ...props.style,
                transform: [{scale: scaleAnim}]
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default ScaleInView;