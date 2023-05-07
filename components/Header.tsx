import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="flex-row ">
      <Image
        source={require("../assets/bottle.png")}
        resizeMode="contain"
        className="w-16  h-16   "
      ></Image>
      <Text className="text-2xl  font-bold  text-center  self-center">
        Spin the Bottle
      </Text>
    </View>
  );
};

export default Header;
