import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./style";
const StyleButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundcolor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textcolor = type === "primary" ? "#FFFFFF" : "#171A20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.Button, { backgroundColor: backgroundcolor }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.Text, { color: textcolor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyleButton;
