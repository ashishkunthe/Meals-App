import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { FavoritesContext } from "../store/context/FavoritesContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  getFav,
  removeFavorites,
} from "../store/redux/FavoritesSlice";

function MealDetail({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favoritesMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector(getFav);
  const dispatch = useDispatch();
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  function changeFavoritesHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorites(mealId));
    } else {
      dispatch(addFavorites(mealId));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="#f5c518"
          onPress={changeFavoritesHandler}
        />
      ),
    });
  }, [navigation, mealIsFavorite, changeFavoritesHandler]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
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
              - {ingredient}
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
    </SafeAreaView>
  );
}

export default MealDetail;

// Styling
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 20, // Extra padding to ensure visibility
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 12,
    color: "#f5f5f5",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 8,
    backgroundColor: "#2e2e2e",
  },
  detailText: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    fontWeight: "600",
    width: 100,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#f5c518",
  },
  listContainer: {
    marginVertical: 20,
    paddingHorizontal: 8,
    paddingVertical: 20,
    backgroundColor: "#2e2e2e",
    borderRadius: 8,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 6,
    color: "#ddd",
    lineHeight: 22,
  },
});
