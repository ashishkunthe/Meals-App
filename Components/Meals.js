import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function Meals({ item }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MealDetail", {
      mealId: item.id,
    });
  }

  return (
    <View style={styles.mealContainer} key={item.id}>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        onPress={pressHandler}
        android_ripple={{ color: "#333" }}
      >
        <View>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{item.duration} min</Text>
          <Text style={styles.infoText}>{item.complexity.toUpperCase()}</Text>
          <Text style={styles.infoText}>
            {item.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealContainer: {
    margin: 16,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5, // Shadow for Android
    backgroundColor: "#2e2e2e", // Dark gray for container background
    color: "#fff",
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.9, // Add subtle visual feedback for presses
  },
  image: {
    width: 300,
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#f5f5f5", // Light color for title
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#1c1c1c", // Darker gray for info background
  },
  infoText: {
    fontSize: 14,
    color: "#cccccc", // Light gray for info text
    fontWeight: "500",
  },
});

export default Meals;
