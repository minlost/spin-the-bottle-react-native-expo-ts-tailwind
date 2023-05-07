import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeButton from "../components/HomeButton";
import BottleBrain from "../components/BottleBrain";

const Game = ({ navigation }: any) => {
  return (
    <SafeAreaView className=" bg-slate-300">
      {/* Header */}
      <View className="flex-row relative">
        <Image
          source={require("../assets/bottle.png")}
          resizeMode="contain"
          className="w-16  h-16   "
        ></Image>
        <Text className="text-2xl  font-bold  text-center  self-center">
          Spin the Bottle
        </Text>
        <HomeButton onPress={() => navigation.navigate("HomeScreen")} />
      </View>
      <View>
        <View className="h-screen">
          <BottleBrain />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Game;
