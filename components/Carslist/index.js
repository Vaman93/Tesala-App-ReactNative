import { View, FlatList, Dimensions } from "react-native";
import styles from "./style";
import cars from "./cars.js";

import Caritem from "../CarItem/index";

const Carslist = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <Caritem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default Carslist;
