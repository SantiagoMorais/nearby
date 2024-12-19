import { IDetailsProps } from "./details-props";

export interface IMarketDataProps extends IDetailsProps {
  cover: string;
}

export interface IMarketRouteProps {
  data: IMarketDataProps;
  coupon: string | null;
  setCoupon: React.Dispatch<React.SetStateAction<string | null>>;
}
