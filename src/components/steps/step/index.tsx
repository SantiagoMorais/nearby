import { colors } from "@/styles/theme";
import { Text, View } from "react-native";
import { s } from "./styles";
import { IStepProps } from "@/core/interfaces/step-props";

export const Step = ({ description, title, icon: Icon }: IStepProps) => (
  <View style={s.container}>
    {Icon && <Icon size={32} color={colors.red.base} />}
    <View style={s.details}>
      <Text style={s.title}>{title}</Text>
      <Text style={s.description}>{description}</Text>
    </View>
  </View>
);
