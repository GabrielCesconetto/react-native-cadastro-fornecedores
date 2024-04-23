import React, { useEffect, useState } from "react";
import { Alert, SectionList, StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Listagem = () => {
    const [fornecedores, setFornecedores] = useState([]);
    const [filtroProduto, setFiltroProduto] = useState('');
    useEffect(() => {
        GetFornecedores(setFornecedores);
    }, [filtroProduto])

    const GetFornecedores = async (setFornecedores) => {
        try {
            var fornecedorGet = await AsyncStorage.getItem('fornecedor');
            fornecedorGet = JSON.parse(fornecedorGet);
            if (filtroProduto.length) {
                fornecedorGet = fornecedorGet.filter(element => element?.categoriaProduto?.startsWith(filtroProduto));
            }
            const arrFornecedores = [];
            if (fornecedorGet === null) return
            fornecedorGet.forEach(element => {
                const obj = {
                    title: element.nome,
                    data: [element.endereco, element.contato, element.categoriaProduto]
                }
                arrFornecedores.push(obj);
            });
            console.log(arrFornecedores);
            setFornecedores(arrFornecedores);
        } catch (error) {
            console.error('Erro ao restaurar fornecedor:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao restaurar o fornecedor.');
        }
    }

    return (
    <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder="Filtro Produto"
        onChangeText={(newText) => setFiltroProduto(newText)}
        defaultValue={filtroProduto}
        />
        <SectionList
        sections={fornecedores}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => `basicListEntry-${index}`}
        />
    </View>
    );
};

export default Listagem;