import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type BottleTaskBrainProps = {
  truthOrDare: string;
  handleTruthOrTask: (value: string) => void;
  taskText: string;
};

const BottleTaskBrain = ({
  truthOrDare,
  handleTruthOrTask,
  taskText,
}: BottleTaskBrainProps) => {
  return (
    <>
      <View className="flex-row justify-evenly items-center mt-4   ">
        <TouchableOpacity
          className="  justify-center items-center"
          onPress={() => handleTruthOrTask("truth")}
          disabled={truthOrDare === "truth" || truthOrDare === "dare"}
        >
          <Text
            className={`text-[18px] ${truthOrDare === "truth" && "font-bold"}`}
          >
            PRAVDA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleTruthOrTask("dare")}
          disabled={truthOrDare === "truth" || truthOrDare === "dare"}
        >
          <Text
            className={`text-[18px] justify-center items-center ${
              truthOrDare === "dare" && "font-bold"
            }`}
          >
            ÚKOL
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center mt-4 px-5">
        <Text className="text-[16px] italic">{taskText && taskText}</Text>
      </View>
    </>
  );
};

export default BottleTaskBrain;
