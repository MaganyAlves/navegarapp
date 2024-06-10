import Api from "../server/Service";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default function Lancados({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Api.get("/selectLancados");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Tipo:{item.tipo}</Text>
      <Text>Valor R$:          {item.valor}</Text>
      <Text>Descrição:{item.descricao}</Text>
      <Text>Categoria:{item.categoria}</Text>
      <Text>Data: {item.data}</Text> 
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Buscar" onPress={fetchData} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
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
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  },
});

/*
import Api from "../server/Service";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default function Lancados({ navigation}) {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await Api.get("/selectReceita");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    <View style={styles.item}>
      <Text>{item.valor}</Text>
      <Text>{item.descricao}</Text>
      <Text>{item.categoria}</Text>
      <Text>{item.data}</Text>
      <Text>{item.tipo}</Text>
    </View>   
  }

  return (
    <View style={styles.container}>
      <Button title="Buscar" onPress={fetchData}/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
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
  item: {
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#f9c2ff',
  },
});
*/
