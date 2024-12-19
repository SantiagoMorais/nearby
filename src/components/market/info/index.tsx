import { IInfoProps } from "@/@core/interfaces/info-props";
import { Text, View } from "react-native";
import { s } from "./style";
import { colors, fontFamily } from "@/styles/theme";

export const Info = ({ icon: Icon, description }: IInfoProps) => (
  <View style={s.container}>
    <Icon size={16} color={colors.gray[400]} />
    <Text style={s.text}>{description}</Text>
  </View>
);
