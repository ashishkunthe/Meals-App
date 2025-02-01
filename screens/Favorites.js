import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { getFav } from "../store/redux/FavoritesSlice";

function Favorites() {
  const Favorites = useSelector(getFav);

  // Filter the favorite meals only once
  const favoriteMeals = MEALS.filter((meal) => Favorites.includes(meal.id));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {favoriteMeals.length > 0 ? (
          favoriteMeals.map((meal) => (
            <View key={meal.id} style={styles.mealItem}>
              <Image source={{ uri: meal.imageUrl }} style={styles.image} />
              <Text style={styles.mealText}>{meal.title}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No favorite meals found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1c1c1c", // Dark background
  },
  scrollContent: {
    paddingBottom: 20, // Extra space at the bottom
  },
  mealItem: {
    backgroundColor: "#2e2e2e",
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  mealText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f5c518",
    marginTop: 10,
  },
  emptyText: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginTop: 50,
  },
});
