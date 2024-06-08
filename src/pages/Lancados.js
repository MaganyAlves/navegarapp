import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default function Lancados({ navigation}) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios("http://192.168.15.154:8081/lancamentos");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    <View>
      <Text>{item.valor}</Text>
      <Text>{item.descricao}</Text>
      <Text>{item.categoria}</Text>
      <Text>{item.data}</Text>
      <Text>{item.tipo}</Text>
      <Button title="Detalhes" onPress={() => navigation.navigate('Detalhes', {id: item.id})} />
    </View>   
  }

  return (
    <View style={styles.container}>
      <Button title="Buscar" onPress={fetchData} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
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