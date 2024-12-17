import { TouchableOpacityProps } from "react-native";

export type TButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};
