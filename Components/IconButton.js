import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, onPress, color = "black", size = 24, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      accessible
      accessibilityLabel={`Icon button for ${icon}`}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 50, // Circular style by default
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75, // Feedback for press action
  },
});
