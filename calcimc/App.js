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

  const calcimc = () => {
    if (peso == 0 || !peso) {
      alert("Informe o peso")
      return
    }
    if (altura == 0 || !altura) {
      alert("informe a altura")
      return
    }

    const r = peso / (Math.pow(altura, 2))
    setResultado(r.toFixed(1))
  }

  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>
      <View style={estilos.bloco}>
        <Text>Informe seu peso</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType={"numeric"}
          onChangeText={text => setPeso(text)}
        ></TextInput>
      </View>
      <View style={estilos.bloco}>
        <Text>Informe a sua altura</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={false}
          keyboardType={"numeric"}
          onChangeText={text => setAltura(text)}
        ></TextInput>
      </View>
      <View style={estilos.bloco}>
        <TouchableHighlight
          style={estilos.btnCalc}
          onPress={() => calcimc()}
        >
          <Text style={estilos.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>
      <View >
        <TouchableHighlight
          style={estilos.bloco}
        >
          <Text>Resultado: {resultado}</Text>
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
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff'
  }

});


