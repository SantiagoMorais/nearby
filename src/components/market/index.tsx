import { View } from "react-native";
import { Cover } from "./cover";
import { Details } from "./details";
import { IMarketRouteProps } from "@/@core/interfaces/market-route-props";
import { Coupon } from "./coupon";
import { generateCouponCode } from "@/utils/functions/generate-coupon-code";

export const MarketContent = ({ data }: { data: IMarketRouteProps }) => (
  <View>
    <Cover uri={data.cover} />
    <Details data={data} />
    <Coupon code={generateCouponCode(8)} />
  </View>
);
