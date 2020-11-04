import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default function calcimc() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>
      <View>
        <Text>Informe seu peso</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType={"numeric"}
          onChangeText={text => setPeso(text)}
        ></TextInput>
      </View>
      <View>
        <Text>Informe a sua altura</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={false}
          keyboardType={"numeric"}
          onChangeText={text => setAltura(text)}
        ></TextInput>
      </View>
      <View>
        <TouchableHighlight

        >
          <Text>Calcular IMC</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}


const estilos = StyleSheet.create({
  corpo: {
    padding: 10
  },
  bloco: {
    marginBottom: 20
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
  }

});


