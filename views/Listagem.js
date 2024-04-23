import React, { useEffect, useState } from "react";
import { Alert, SectionList, StyleSheet, Text, View } from "react-native";
import { styles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Listagem = () => {
    const [fornecedores, setFornecedores] = useState([]);
    useEffect(() => {
        GetFornecedores(setFornecedores);
    }, [])

    const GetFornecedores = async (setFornecedores) => {
        try {
            var fornecedorGet = await AsyncStorage.getItem('fornecedor');
            fornecedorGet = JSON.parse(fornecedorGet);
            const arrFornecedores = [];
            fornecedorGet.forEach(element => {
                const obj = {
                    title: element.nome,
                    data: [element.endereco, element.contato]
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