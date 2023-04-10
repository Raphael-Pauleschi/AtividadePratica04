import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Contador from './src/components/Contador'

export default function App() {
  return (
    <View style={style.App}>
    <Contador inicial={500}/>
      <Text >
       Oh yeah! da dadadada dada
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    backgroundColor:'#d62063',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})



