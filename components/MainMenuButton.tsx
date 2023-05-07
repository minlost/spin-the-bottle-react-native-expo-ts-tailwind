import { View, Text, Button, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type MainMenuButtonProps = {
  title: string;
  onPress: () => void;
};

const MainMenuButton = ({ title, onPress }: MainMenuButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row justify-center bg-[#466d1d] rounded-xl w-32 h-12 items-center mb-1 ">
        <Text className="text-white text-lg"> {title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainMenuButton;
