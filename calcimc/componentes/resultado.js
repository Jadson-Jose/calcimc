import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default props => {
    return (
        <View style={estilos.bloco}>
            <Text>Resultado: {props.resultado}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({

    bloco: {
        marginBottom: 20,
        width: '100%'
    },

});
