import { Text, View } from "react-native";
import { s } from "./style";
import { IDetailsProps } from "@/@core/interfaces/details-props";

export const Details = ({ data }: { data: IDetailsProps }) => (
  <View style={s.container}>
    <Text style={s.name}>{data.name}</Text>
    <Text style={s.description}>{data.description}</Text>
    <View style={s.group}>
      <Text style={s.title}>Informações</Text>
    </View>
  </View>
);
