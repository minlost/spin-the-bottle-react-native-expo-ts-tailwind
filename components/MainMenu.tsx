import { View, Text, Button, Image } from "react-native";
import React from "react";
import MainMenuButton from "./MainMenuButton";

const MainMenu = ({ navigation }: any) => {
  return (
    <View className="mt-32 items-center ">
      <Image
        className=" w-28 h-28  "
        resizeMode="contain"
        source={require("../assets/bottle.png")}
      ></Image>
      <Text className="text-center text-[24px]">Spin the Bottle</Text>
      <View className="h-[1px] w-[250px] bg-gray-700 my-3"></View>
      <MainMenuButton
        title="Play"
        onPress={() => navigation.navigate("Game")}
      />
      <MainMenuButton
        title="Pravidla"
        onPress={() => navigation.navigate("Rules")}
      />
    </View>
  );
};

export default MainMenu;
