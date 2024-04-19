import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default App = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontSize: 22 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
};
