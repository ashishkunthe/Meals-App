import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";
import WelcomeScreen from "./screens/WelcomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./screens/Favorites";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1c1c1c", // Dark header background
        },
        headerTintColor: "#f5c518", // Highlighted text color for the header
        drawerStyle: {
          backgroundColor: "#2e2e2e", // Dark drawer background
        },
        drawerActiveTintColor: "#f5c518", // Highlighted color for active drawer items
        drawerInactiveTintColor: "#ccc", // Light gray for inactive drawer items
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold", // Bold labels for clarity
        },
        sceneStyle: {
          backgroundColor: "#1c1c1c", // Background for screens within the drawer
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
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
              component={DrawerNavigation}
              options={{
                headerShown: false,
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
      </Provider>
      {/* </FavoritesContextProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
