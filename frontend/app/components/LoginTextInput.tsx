import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

function LoginTextInput({style: customStyles, ...props}: TextInputProps) {
    return (
        <TextInput 
            value={"Test"}
            style={[styles.input, customStyles]}  
            {...props} 
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        height: "1rem"
    }
})

export default LoginTextInput;