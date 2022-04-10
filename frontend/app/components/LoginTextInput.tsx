import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

function LoginTextInput(
        {style: customStyles, ...props}: TextInputProps, 
        icon?: React.FC
    ) {
    return (
        <View style={styles.view}>
            <>
                {icon}
                <TextInput 
                    value={"Test"}
                    style={[styles.input, customStyles]}  
                    {...props} 
                />
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        width: "65%",
        justifyContent: "center",
        alignContent: "center",
        borderColor: "black",
        // borderWidth: 10
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.12,
        shadowRadius: 20,
        elevation: 1
    },
    input: {
        backgroundColor: "white",
    }
})

export default LoginTextInput;