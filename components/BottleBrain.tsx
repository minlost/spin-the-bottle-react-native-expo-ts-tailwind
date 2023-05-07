import { View, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import BottleDetail from "./BottleDetail";
import bottleImages from "../utils/bottleImages";
import { startSpin } from "../utils/bottleUtils";
import BottleMain from "./BottleMain";
import { SpinHandlers } from "../types/BottleTypes";
import { Text } from "react-native";
import { truthTask, dareTask } from "../utils/truthOrDareData";
import BottleTaskBrain from "./BottleTaskBrain";

const BottleBrain = () => {
  const [choosenImage, setChoosenImage] = useState(bottleImages[0]);
  const spinValue = useRef(new Animated.Value(0)).current;
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastStopValue, setLastStopValue] = useState(0);
  const [truthOrDare, setTruhOrDare] = useState("");
  const [taskText, setTaskText] = useState("");
  const [truthStore, setTruthStore] = useState<string[]>([]);
  const [dareStore, setDareStore] = useState<string[]>([]);

  const handlePress = (handlers: SpinHandlers) => {
    if (!handlers.isSpinning) {
      setTaskText("");
      setTruhOrDare("");
      startSpin(handlers);
    }
  };

  const selectRandomTask = (tasks: string[]) => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    if (truthStore.includes(tasks[randomIndex])) {
      selectRandomTask(tasks);
    }
    if (truthStore.length === tasks.length) {
      setTruthStore([]);
    }
    if (dareStore.includes(tasks[randomIndex])) {
      selectRandomTask(tasks);
    }
    if (dareStore.length === tasks.length) {
      setDareStore([]);
    }
    return tasks[randomIndex];
  };

  const handleTruthOrTask = (value: string) => {
    const tasks = value === "truth" ? truthTask : dareTask;
    const task = selectRandomTask(tasks);
    if (value === "truth") {
      setTruthStore([...truthStore, task]);
    } else {
      setDareStore([...dareStore, task]);
    }
    setTruhOrDare(value);
    setTaskText(task);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "1000deg"],
  });

  return (
    <>
      <View className="flex-row justify-center items-center mt-4 ">
        <Text className="text-[25px] text-gray-400">Choose your weapon</Text>
      </View>
      <View className="mt-8">
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ flexDirection: "row" }}
          showsHorizontalScrollIndicator={false}
        >
          {bottleImages.map((bottle, index) => (
            <BottleDetail
              key={index}
              image={bottle}
              onPress={setChoosenImage}
            />
          ))}
        </ScrollView>
      </View>

      <BottleMain
        handlePress={handlePress}
        choosenImage={choosenImage}
        spin={spin}
        spinValue={spinValue}
        lastStopValue={lastStopValue}
        setIsSpinning={setIsSpinning}
        setLastStopValue={setLastStopValue}
        isSpinning={isSpinning}
      />
      <BottleTaskBrain
        handleTruthOrTask={handleTruthOrTask}
        truthOrDare={truthOrDare}
        taskText={taskText}
      />
    </>
  );
};

export default BottleBrain;
