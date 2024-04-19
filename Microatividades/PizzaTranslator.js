import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles";

const PizzaTranslator = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Digite aqui para traduzir"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 22 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
};

export default PizzaTranslator