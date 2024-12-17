import { IMarketsProps } from "@/@core/interfaces/markets-props";
import { currentLocation } from "@/utils/objects/current-location";
import { Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { fontFamily, colors } from "@/styles/theme";
import { s } from "./style";

export const Map = ({ data }: { data: IMarketsProps[] }) => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <Marker
      identifier="current"
      coordinate={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      }}
      image={require("@/assets/location.png")}
    />
    {data.map((market) => (
      <Marker
        key={market.id}
        identifier={market.id}
        coordinate={{
          latitude: market.latitude,
          longitude: market.longitude,
        }}
        image={require("@/assets/pin.png")}
      >
        <Callout>
          <View>
            <Text style={s.name}>{market.name}</Text>
            <Text style={s.address}>{market.address}</Text>
          </View>
        </Callout>
      </Marker>
    ))}
  </MapView>
);
