import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";

function MealDetail({ route, navigation }) {
  const mealId = route.params.mealId;

  // Find the selected meal based on the ID
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerPressHandler() {
    console.log("pressed");
  }

  useLayoutEffect(function () {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon="star" color="yellow" onPress={headerPressHandler} />
        );
      },
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Meal Image */}
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      {/* Meal Details */}
      <View style={styles.details}>
        <Text style={styles.detailText}>
          Duration: {selectedMeal.duration} min
        </Text>
        <Text style={styles.detailText}>
          Complexity: {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailText}>
          Affordability: {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>

      {/* Ingredients */}
      <Text style={styles.sectionTitle}>Ingredients</Text>
      <View style={styles.listContainer}>
        {selectedMeal.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.listItem}>
            {ingredient}
          </Text>
        ))}
      </View>

      {/* Steps */}
      <Text style={styles.sectionTitle}>Steps</Text>
      <View style={styles.listContainer}>
        {selectedMeal.steps.map((step, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

export default MealDetail;

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    color: "#333",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    flex: 1, // Allows equal spacing
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 0,
    color: "#444",
  },
  listContainer: {
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
    color: "#555",
  },
});
