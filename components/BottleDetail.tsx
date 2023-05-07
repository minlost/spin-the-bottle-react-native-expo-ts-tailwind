import React from "react";
import { View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type BottleDetailProps = {
  image: any;
  onPress: (image: any) => void;
};

const BottleDetail = ({ image, onPress }: BottleDetailProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(image)}>
      <View className="flex-col items-center justify-center">
        <Image
          source={image}
          resizeMode="contain"
          className="w-16 h-16"
        ></Image>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BottleDetail;
