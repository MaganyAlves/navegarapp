import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Lancados({ navigation}) {
  return (
    <View style={styles.container}>
      <Button title="Registrar" onPress={() => navigation.navigate('Registrar')} />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});