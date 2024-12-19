import { View } from "react-native";
import { Cover } from "./cover";
import { Details } from "./details";
import { IMarketRouteProps } from "@/@core/interfaces/market-route-props";

export const MarketContent = ({ data }: { data: IMarketRouteProps }) => (
  <View>
    <Cover uri={data.cover} />
    <Details data={data} />
  </View>
);
