import { useState } from "react";
import { Button, Text, TextInput, View, Alert } from "react-native";
import { styles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cadastro = () => {
    const 
        [nome, setNome] = useState(""),
        [endereco, setEndereco] = useState(""),
        [contato, setContato] = useState(""),
        [categoriaProduto, setCategoriaProduto] = useState("");

    const SalvarFornecedor = async () => {
        try {
            const fornecedor = {
                nome,
                endereco,
                contato,
                categoriaProduto
            };
            var fornecedoresStore = await AsyncStorage.getItem('fornecedor');
            fornecedoresStore = JSON.parse(fornecedoresStore);
            if (fornecedoresStore !== null) {
                fornecedoresStore.push(fornecedor);
                console.log(fornecedoresStore);
                await AsyncStorage.setItem('fornecedor', JSON.stringify(fornecedoresStore));
            } else {
                await AsyncStorage.setItem('fornecedor', JSON.stringify([fornecedor]));
            }
            Alert.alert('Sucesso', 'Fornecedor salvo com sucesso.');
        } catch (error) {
            console.error('Erro ao salvar fornecedor:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao salvar o fornecedor.');
        }
    }

    const LimparCampos = () => {
        setNome('');
        setEndereco('');
        setContato('');
    }

    return (
    <View style={styles.container}>
        <Text style={styles.header}>Cadastro de fornecedores</Text>
        <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(newText) => setNome(newText)}
        value={nome}
        />
        <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={(newText) => setEndereco(newText)}
        value={endereco}
        />
        <TextInput
        style={styles.input}
        placeholder="Contato"
        onChangeText={(newText) => setContato(newText)}
        value={contato}
        />
        <TextInput
        style={styles.input}
        placeholder="Categoria Produto"
        onChangeText={(newText) => setCategoriaProduto(newText)}
        value={categoriaProduto}
        />
        <Button
            onPress={() => {
                LimparCampos();
                SalvarFornecedor();
            }}
            title="Salvar"
            color="#841584"
            aria-label="Botão Salvar"
        />
    </View>
    );
};

export default Cadastro