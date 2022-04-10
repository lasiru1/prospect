import {StyleSheet, StatusBar, Text, View, SafeAreaView, ActivityIndicator} from 'react-native';
import React from "react";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <StatusBar style="auto"/>
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
        fontFamily: "Inter_600SemiBold",
        color: '#ffffff',
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 30,
    }
});
