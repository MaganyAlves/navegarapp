import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import Api from "../server/Service";

export default function Registrar({ navigation}) {
    const [tipo, setTipo] = React.useState("");
    const [valor, setValor] = React.useState("");
    const [categoria, setCategoria] = React.useState("");
    const [descricao, setDescricao] = React.useState("");
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);
    const [mode, setMode] = React.useState('date');
    
    const KeyboardAvoidingViewBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

    function openLancados() {
        navigation.navigate('Lancados');
    }

    function limparCampos() {
        setTipo("");
        setValor("");
        setCategoria("");
        setDescricao("");
        setDate(new Date());
    }

    function onChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    function showMode(currentMode) {
        setShow(true);
        setMode(currentMode);
    };
    function showDatePicker() {
        showMode('date');
    }
//Função para registrar lançamento no Banco de Dados
    function registrarLancamento() {
        const receita = {
            tipo: tipo,
            valor: valor,
            categoria: categoria,
            descricao: descricao,
            data: date.toLocaleDateString(),
        };
        console.log(receita);
        openLancados();
        limparCampos();
    
    }

  return (   
    <View style={styles.container}>
        <View>
            <Text style={styles.titulo}>REGISTRAR LANÇAMENTOS</Text>
            <View style={styles.tipo}>
                <Picker               
                    selectedValue={tipo}
                    onValueChange={(itemValue, _itemIndex) => setTipo(itemValue)}
                >
                    <Picker.Item label="Tipo Lançamento" value="" enabled={false} />
                    <Picker.Item label="Receitas" value="receitas" />
                    <Picker.Item label="Despesas" value="despesas" />
                </Picker>
            </View>
            
            <View>
                <View style={styles.areaimput}>
                    <TextInput style={styles.textInput} 
                        placeholder="R$ Valor"
                        value={valor}
                        onChangeText={(text) => setValor(text)}
                        keyboardType="numeric"
                    />
                          
                    <TextInput style={styles.textInput} 
                        placeholder="Categoria"
                        value={categoria}
                        onChangeText={(text) => setCategoria(text)}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder="Descrição"
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                    />
                    

                    <TouchableOpacity onPress={showDatePicker}>
                        <TextInput style={styles.textInput}
                        value={date.toLocaleDateString()} editable={false}
                        />
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                    
                </View>
                
                <View style={styles.areaButton}>
                    <Button title="Salvar" onPress={registrarLancamento} />    
                </View>
            </View>
        </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 0,
        //backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'space-around',
    },
    titulo:{
       fontSize: 24,
       fontWeight: 'bold',
       textAlign: 'center',
       color: '#ec6500',
       
   },
    tipo:{
        marginTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    areaimput:{
        marginTop: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        
    },  
    textInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    } ,
    areaButton:{
        marginTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderBottomEndRadius: 20,
    },   
});