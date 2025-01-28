import { Pressable, StyleSheet, Text, View } from "react-native";

function WelcomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("MealsCategories");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Let's Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200ee",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 3, // Shadow for Android
  },
  buttonPressed: {
    backgroundColor: "#3700b2",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
