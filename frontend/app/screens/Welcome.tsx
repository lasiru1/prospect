import {StyleSheet, Text, View, SafeAreaView, ActivityIndicator} from 'react-native';
import React from "react";

export default function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style = {styles.text}>
                    Prospect
                </Text>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#98EE99',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 30,
    }
});
