import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoriesGridTile({ Title, Color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: Color }]}>
          <Text style={styles.title}>{Title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10, // Space between tiles
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "transparent",
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
  },
});
