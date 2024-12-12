import { ActivityIndicator } from "react-native"; // ActivityIndicator: Loading Component
import { s } from "./styles";
import { colors } from "@/styles/theme";

export const Loading = () => (
  <ActivityIndicator color={colors.green.base} style={s.container} />
);
