import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../Components/CategoriesGridTile";

function CategoriesScreen({ navigation }) {
  function rendorCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("Meals Overview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoriesGridTile
        Title={itemData.item.title}
        Color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={rendorCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
