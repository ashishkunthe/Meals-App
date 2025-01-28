import { Pressable, StyleSheet, Text, View } from "react-native";

function WelcomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("MealsCategories");
  }

  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>🍽️</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Welcome</Text>

      {/* Description */}
      <Text style={styles.description}>
        Discover delicious recipes and meal categories to make cooking fun and
        easy. Let's get started!
      </Text>

      {/* Button */}
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Let's Start</Text>
      </Pressable>

      {/* Footer */}
      <Text style={styles.footer}>Your culinary journey begins here. 🍳</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c", // Black background for the body
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333", // Dark gray background for the logo
    borderRadius: 40,
  },
  logoText: {
    fontSize: 40,
    color: "#f5f5f5", // Light gray for the logo text
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f5f5f5", // Light gray for the title
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#cccccc", // Lighter gray for description text
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#333333", // Dark gray for the button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: "#444444", // Slightly lighter gray for the border
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonPressed: {
    backgroundColor: "#555555", // Lighter gray when pressed
  },
  buttonText: {
    color: "#f5f5f5", // Light gray for button text
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    fontSize: 14,
    color: "#777777", // Subtle gray for footer text
    textAlign: "center",
    marginTop: 20,
  },
});

export default WelcomeScreen;
