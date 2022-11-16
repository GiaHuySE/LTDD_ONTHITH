import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CoffeeScreen from "./Screens/CoffeeScreen";
import CoffeeDetailScreen from "./Screens/CoffeeDetailScreen";
import coffees from "./config/coffees";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CoffeeScreen"
          component={CoffeeScreen}
          options={{ title: "Coffee", headerShown: false }}
        />
        <Stack.Screen
          name="CoffeeDetailScreen"
          component={CoffeeDetailScreen}
          options={{ title: "Coffee", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // {/* <View>
    //   <CoffeeDetailScreen coffee={coffees[1]} />
    // </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
