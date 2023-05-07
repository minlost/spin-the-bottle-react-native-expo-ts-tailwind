import { Animated, Easing } from "react-native";
import { SpinHandlers } from "../types/BottleTypes";

// Spin logig for the bottle animation

export const startSpin = ({
  spinValue,
  lastStopValue,
  setIsSpinning,
  setLastStopValue,
}: SpinHandlers) => {
  setIsSpinning(true);
  const stopValue = Math.floor(Math.random() * 360);
  const rounds = 5 + Math.floor(Math.random() * 7);
  const newStopValue = lastStopValue + rounds * 360 + stopValue;
  Animated.timing(spinValue, {
    toValue: (lastStopValue + newStopValue) / 360,
    duration: 2500,
    easing: Easing.out(Easing.ease),
    useNativeDriver: true,
  }).start(() => {
    setIsSpinning(false);
    setLastStopValue((lastStopValue + newStopValue) % 360);
  });
};
