import { MutableRefObject } from "react";

export interface ICameraProps {
  setIsCameraVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isCameraVisible: boolean;
  setCouponFetching: React.Dispatch<React.SetStateAction<boolean>>;
  setCoupon: React.Dispatch<React.SetStateAction<string | null>>;
  qrLock: MutableRefObject<boolean>;
}
