import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./style";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";
import { TPlaceProps } from "@/@core/types/place-props";

export const Place = ({ data, ...rest }: TPlaceProps) => (
  <TouchableOpacity style={s.container} {...rest}>
    <Image style={s.image} source={{ uri: data.cover }} />
    <View style={s.content}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description} numberOfLines={2}>
        {data.description}
      </Text>
      <View style={s.footer}>
        <IconTicket size={16} color={colors.red.base} />
        <Text style={s.tickets}>{data.coupons} cupons disponíveis</Text>
      </View>
    </View>
  </TouchableOpacity>
);