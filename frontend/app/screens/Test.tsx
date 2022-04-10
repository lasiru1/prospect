import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Test() {
    return (
        <View style={styles.testBox}>
            <Text>Test Window</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    testBox: {
        textAlign: "center",
        alignContent: "center"
    }, 
})

export default Test;