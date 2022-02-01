import { Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyleButton from "../styleButton/index";

const Caritem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.Carcontainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.Title}>
        <Text style={styles.titles}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {""} 
          <Text style={styles.subtitlecta}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.log("Custom Order");
          }}
        />
        <StyleButton
          type="second"
          content={"Existing Inventory"}
          onPress={() => {
            console.log("Existing Inventory was prossed");
          }}
        />
      </View>
    </View>
  );
};

export default Caritem;
