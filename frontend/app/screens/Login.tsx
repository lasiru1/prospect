import LoginTextInput from '../../app/components/LoginTextInput';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import LoginPage from "../assets/login_img.svg"

const Login: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LoginPage style={styles.image} />
            <LoginTextInput icon={
                () => (
                    <Image 
                        source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOIJTKhQNgBLepC2ZrFqrEJ4s8fKh0FySbaKu-kQk9IHaRPOo8h6nQ6oglSQX4GxciM&usqp=CAU"
                        }}
                        style={{width: "10%"}}
                    />
                )
            } style={styles.textInput} />
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
        marginTop: 10,
        // boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.12)"
    }
})

export default Login;