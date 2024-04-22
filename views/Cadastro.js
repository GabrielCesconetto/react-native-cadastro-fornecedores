import { useState } from "react";
import { Button, Text, TextInput, View, AsyncStorage, Alert } from "react-native";
import { styles } from "../styles";

const Cadastro = () => {
    const 
        [nome, setNome] = useState(""),
        [endereco, setEndereco] = useState(""),
        [contato, setContato] = useState("");

    const SalvarFornecedor = async () => {
        try {
            const fornecedor = {
                nome,
                endereco,
                contato
            };
            console.log(fornecedor);
            await AsyncStorage.setItem('fornecedor', JSON.stringify(fornecedor));
            Alert.alert('Sucesso', 'Fornecedor salvo com sucesso.');
        } catch (error) {
            console.error('Erro ao salvar fornecedor:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao salvar o fornecedor.');
        }
    }

    return (
    <View style={styles.container}>
        <Text style={styles.header}>Cadastro de fornecedores</Text>
        <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(newText) => setNome(newText)}
        defaultValue={nome}
        />
        <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={(newText) => setEndereco(newText)}
        defaultValue={endereco}
        />
        <TextInput
        style={styles.input}
        placeholder="Contato"
        onChangeText={(newText) => setContato(newText)}
        defaultValue={contato}
        />
        <Button
            onPress={() => SalvarFornecedor()}
            title="Salvar"
            color="#841584"
            aria-label="Botão Salvar"
        />
    </View>
    );
};

export default Cadastro