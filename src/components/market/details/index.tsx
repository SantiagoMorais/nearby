import { Text, View } from "react-native";
import { s } from "./style";
import { IDetailsProps } from "@/@core/interfaces/details-props";
import { Info } from "../info";
import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";

export const Details = ({ data }: { data: IDetailsProps }) => (
  <View style={s.container}>
    <Text style={s.name}>{data.name}</Text>
    <Text style={s.description}>{data.description}</Text>
    <View style={s.group}>
      <Text style={s.title}>Informações</Text>
      <Info
        description={`${data.coupons} cupons disponíveis`}
        icon={IconTicket}
      />
      <Info description={data.address} icon={IconMapPin} />
      <Info description={data.phone} icon={IconPhone} />
    </View>
    <View style={s.group}>
      <Text style={s.title}>Regulamento</Text>
      {data.rules.map((rule) => (
        <Text key={rule.id} style={s.rule}>
          {`\u2022 ${rule.description}`}
        </Text>
      ))}
    </View>
  </View>
);
