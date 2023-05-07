import { HomeIcon } from "react-native-heroicons/solid";

import { View, Text, TouchableWithoutFeedback, Button } from "react-native";
import React from "react";

type HomeButtonProps = {
  onPress: () => void;
};

const HomeButton = ({ onPress }: HomeButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="absolute right-5 top-0  p-4   justify-center items-center ">
        <HomeIcon size={42} color={"gray"} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeButton;
