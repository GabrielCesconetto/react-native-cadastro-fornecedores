import { useState } from "react";
import { styles } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cadastro from "./views/Cadastro";
import Listagem from "./views/Listagem";

export default App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Listagem" component={Listagem} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
