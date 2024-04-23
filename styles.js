import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 18,
        fontWeight: 800
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        color: '#1285D5',
        textShadowColor: 'black',
        textShadowRadius: '1px'
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 700,
        textTransform: 'uppercase'
    }
})