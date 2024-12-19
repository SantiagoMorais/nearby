import { ICameraProps } from "@/@core/interfaces/camera-props";
import { Button } from "@/components/button";
import { api } from "@/services/api";
import { CameraView } from "expo-camera";
import { Alert, Modal } from "react-native";

export const Camera = ({
  isCameraVisible,
  setIsCameraVisible,
  setCouponFetching,
  setCoupon,
  qrLock,
}: ICameraProps) => {
  const getCoupon = async (id: string) => {
    try {
      setCouponFetching(true);
      const { data } = await api.patch<{ coupon: string }>("/coupons/" + id);
      Alert.alert("Cupom", data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.log(error);
      return Alert.alert("Erro", "Não foi possível utilizar o cupom");
    } finally {
      setCouponFetching(false);
    }
  };

  const handleUseCoupon = (id: string) => {
    setIsCameraVisible(false);

    Alert.alert(
      "Cupom",
      "Não é possível reutilizar um cupom resgatado. Deseja realmente restagar o cupom agora?",
      [
        { style: "cancel", text: "Não" },
        { text: "Sim", onPress: () => getCoupon(id) },
      ]
    );
  };

  return (
    <Modal style={{ flex: 1 }} visible={isCameraVisible}>
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(() => {
              handleUseCoupon(data);
            }, 500);
          }
        }}
      />
      <Button
        onPress={() => setIsCameraVisible(false)}
        style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}
      >
        <Button.Title>Voltar</Button.Title>
      </Button>
    </Modal>
  );
};
