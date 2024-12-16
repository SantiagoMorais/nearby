import { TouchableOpacityProps } from "react-native";
import { IPlaceProps } from "../interfaces/place-props";

export type TPlaceProps = TouchableOpacityProps & {
  data: IPlaceProps[];
};
