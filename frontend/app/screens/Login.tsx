import LoginTextInput from '../../app/components/LoginTextInput';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import LoginPage from "../assets/login_img.svg"

function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <LoginPage style={styles.image} />
            <LoginTextInput style={styles.textInput} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#98EE99",
        paddingTop: 20,
        opacity: 0.7,
        height: "100%",
        width: "100%",
    },
    image: {
        position: 'relative',
        marginTop: 36,
        marginLeft: 23,
        justifyContent: "center"
    },
    textInput: {
        position: 'relative',
        marginTop: 10
    }
})

export default Login;