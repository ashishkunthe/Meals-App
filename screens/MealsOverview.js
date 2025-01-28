import { View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Meals from "../Components/Meals";
import { useLayoutEffect } from "react";

function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(
    function () {
      const categoryTitle = CATEGORIES.find(
        (category) => category.id === catId
      ).title;

      navigation.setOptions({
        title: categoryTitle,
      });
    },
    [catId, navigation]
  );

  function rendorMealItem(dataItem) {
    return (
      <Meals
        title={dataItem.item.title}
        id={dataItem.item.id}
        item={dataItem.item}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={rendorMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default MealsOverview;
