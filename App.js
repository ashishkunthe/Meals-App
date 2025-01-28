import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";
import WelcomeScreen from "./screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Meals App"
            component={WelcomeScreen}
            options={{
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meals",
            }}
          />
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverview}
            options={{
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          />
          <Stack.Screen name="MealDetail" component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
