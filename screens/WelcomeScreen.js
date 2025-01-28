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
    backgroundColor: "#1c1c1c", // Black background for the body
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f5f5f5", // Light gray for the title
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333333", // Dark gray for the button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: "#444444", // Slightly lighter gray for the border
    borderWidth: 1,
  },
  buttonPressed: {
    backgroundColor: "#555555", // Lighter gray when pressed
  },
  buttonText: {
    color: "#f5f5f5", // Light gray for button text
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
