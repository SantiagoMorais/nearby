import { IMarketsProps } from "@/@core/interfaces/markets-props";
import { currentLocation } from "@/utils/objects/current-location";
import { Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { s } from "./style";
import { Asset } from "expo-asset";
import { router } from "expo-router";

const locationImage = Asset.fromModule(require("@/assets/location.png")).uri;
const pinImage = Asset.fromModule(require("@/assets/pin.png")).uri;

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
      image={{ uri: locationImage }}
    />
    {data.map((market) => (
      <Marker
        key={market.id}
        identifier={market.id}
        coordinate={{
          latitude: market.latitude,
          longitude: market.longitude,
        }}
        image={{ uri: pinImage }}
      >
        <Callout onPress={() => router.navigate(`/market/${market.id}`)}>
          <View>
            <Text style={s.name}>{market.name}</Text>
            <Text style={s.address}>{market.address}</Text>
          </View>
        </Callout>
      </Marker>
    ))}
  </MapView>
);
