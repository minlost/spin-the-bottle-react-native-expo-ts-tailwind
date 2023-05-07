import { View, Text, Animated } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SpinHandlers } from "../types/BottleTypes";
import { BottleMainProps } from "../types/BottleTypes";

const BottleMain = ({
  handlePress,
  isSpinning,
  spinValue,
  lastStopValue,
  setIsSpinning,
  setLastStopValue,
  choosenImage,
  spin,
}: BottleMainProps) => {
  return (
    <View className="flex-row justify-center items-center">
      <TouchableOpacity
        onPress={() =>
          handlePress({
            isSpinning,
            spinValue,
            lastStopValue,
            setIsSpinning,
            setLastStopValue,
          })
        }
      >
        <Animated.Image
          source={choosenImage}
          resizeMode="contain"
          className="w-64 h-64  mt-14 mb-10"
          style={{
            transform: [{ rotate: spin }],
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottleMain;
