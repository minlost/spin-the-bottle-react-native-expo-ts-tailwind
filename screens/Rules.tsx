import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainMenu from "../components/MainMenu";
import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import { textOfRules } from "../utils/textOfRules";

const Rules = ({ navigation }: any) => {
  return (
    <SafeAreaView className=" bg-slate-300 relative ">
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

      {/* Body */}
      <View className="flex-col  h-full relative   items-center pt-32">
        <View className=" justify-cente items-center w-[80%]">
          <Text className="text-2xl  ">Pravidla</Text>
          <View className="h-[1px] w-[250px] bg-gray-700 my-3"></View>
          <Text className="  ">{textOfRules}</Text>
        </View>
      </View>
      <View className="w-full items-center">
        <Text className="absolute bottom-32 text-center text-gray-400 italic ">
          Václav Vlček &copy; 2023
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Rules;

// import { View, Text, Image } from "react-native";
// import React, { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import MainMenu from "../components/MainMenu";
// import Header from "../components/Header";
// import HomeButton from "../components/HomeButton";
// import { textOfRules } from "../utils/textOfRules";
// const Rules = ({ navigation }: any) => {
//   return (
//     <SafeAreaView className=" bg-slate-300 relative ">
//       {/* Header */}

//       {/* Body */}
//       <View className="flex-col  h-full relative mt-32  items-center   ">

//       </View>
//       <View className="w-full items-center border">
//         <Text className=" text-center text-red-500 italic ">
//           Václav Vlček &copy; 2023
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Rules;
