import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface TestProps {
    route?: any;
}
const Test: React.FC<TestProps> = ({ route }) => {
    const { test } = route.params;
    return (
        <View style = {styles.container}>
            <Text>{test}</Text>
            <Text>test</Text>
        </View>
);
}
export default Test;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
});