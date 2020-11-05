import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

export default function tabela() {
    return (
        <View style={estilos.bloco}>
            <Image
                source={require('../assets/tabela.png')}
                style={estilos.tebela}
            />
        </View>
    )
}

const estilos = StyleSheet.create({

    bloco: {
        marginBottom: 20,
        width: '100%'
    },
    tebela: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: -57
    }

});
