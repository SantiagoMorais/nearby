import { PressableProps } from "react-native";

export type TCategoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};
