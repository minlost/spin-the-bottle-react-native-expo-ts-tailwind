import { Animated } from "react-native";

export type SpinHandlers = {
  spinValue: Animated.Value;
  lastStopValue: number;
  setIsSpinning: (value: boolean) => void;
  setLastStopValue: (value: number) => void;
  isSpinning: boolean;
};

export type BottleMainProps = {
  handlePress: (handlers: SpinHandlers) => void;
  isSpinning: boolean;
  spinValue: Animated.Value;
  lastStopValue: number;
  setIsSpinning: (value: boolean) => void;
  setLastStopValue: (value: number) => void;
  choosenImage: any;
  spin: any;
};
