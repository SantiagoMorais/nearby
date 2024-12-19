import { IMarketRouteProps } from "@/@core/interfaces/market-route-props";
import { useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Alert, ScrollView, StatusBar, View } from "react-native";
import { Button } from "../button";
import { Camera } from "./camera";
import { Coupon } from "./coupon";
import { Cover } from "./cover";
import { Details } from "./details";

export const MarketContent = ({
  data,
  coupon,
  setCoupon,
}: IMarketRouteProps) => {
  const [isCameraVisible, setIsCameraVisible] = useState<boolean>(false);
  const [couponFetching, setCouponFetching] = useState<boolean>(false);
  const [_, requestsPermission] = useCameraPermissions();
  const qrLock = useRef(false);

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestsPermission();

      if (!granted)
        return Alert.alert("Câmera", "É necessário habilitar o uso da câmera.");

      qrLock.current = false;
      setIsCameraVisible(true);
    } catch (error) {
      console.log(error);
      return Alert.alert("CÂmera", "Não foi possível utilizar a câmera");
    }
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>
      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera} isLoading={couponFetching}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>
      <Camera
        isCameraVisible={isCameraVisible}
        setIsCameraVisible={setIsCameraVisible}
        setCoupon={setCoupon}
        setCouponFetching={setCouponFetching}
        qrLock={qrLock}
      />
    </View>
  );
};
