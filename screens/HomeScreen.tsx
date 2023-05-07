import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainMenu from "../components/MainMenu";
import Header from "../components/Header";

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView className=" bg-slate-300 relative ">
      {/* Header */}
      <Header />

      {/* Body */}
      <View className="flex-col  h-full relative  items-center  ">
        <MainMenu navigation={navigation} />
      </View>
      <View className="w-full items-center">
        <Text className="absolute bottom-32 text-center text-gray-400 italic ">
          Václav Vlček &copy; 2023
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
