import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const InputSignInButton = ({onPress}) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={stylebutton.signin} activeOpacity={0.8}>
                <Text style={stylebutton.signintext}>Entrar</Text>
            </TouchableOpacity>
        </>
    );
}

const stylebutton = StyleSheet.create({
    signin: {
        width: 282,
        height: 49,
        backgroundColor: '#0075C4',
        borderRadius: 12,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    signintext: {
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})