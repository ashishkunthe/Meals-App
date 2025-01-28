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
        android_ripple={{ color: "#ccc" }}
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
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4, // Shadow for Android
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.7, // Add visual feedback for presses
  },
  image: {
    width: 300,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    color: "#333",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#f8f8f8",
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "600",
  },
});

export default Meals;
