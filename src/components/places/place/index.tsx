import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./style";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";

export const Place = () => (
  <TouchableOpacity style={s.container}>
    <Image style={s.image} />
    <View style={s.content}>
      <Text style={s.name}></Text>
      <Text style={s.description}></Text>
      <View style={s.footer}>
        <IconTicket size={16} color={colors.red.base} />
        <Text style={s.tickets}> cupons disponíveis</Text>
      </View>
    </View>
  </TouchableOpacity>
);
