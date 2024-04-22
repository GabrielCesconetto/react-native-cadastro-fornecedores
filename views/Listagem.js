import React, { useEffect } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { styles } from "../styles";

const Listagem = () => {
    useEffect(() => {

    }, [])

    const GetFornecedores = () => {

    }

    return (
    <View style={styles.container}>
        <SectionList
        sections={[
            {
            title: "",
            data: [ "" ],
            },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
        />
    </View>
    );
};

export default Listagem;