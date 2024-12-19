import { IMarketDataProps } from "@/@core/interfaces/market-route-props";
import { Loading } from "@/components/loading";
import { MarketContent } from "@/components/market";
import { api } from "@/services/api";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const Market = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const [coupon, setCoupon] = useState<string | null>(null);

  console.log(params);

  const [data, setData] = useState<IMarketDataProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMarket = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get(`/markets/${params.id}`);
      setData(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível carregar os dados.", [
        {
          text: "Ok",
          onPress: () => router.back(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMarket();
  }, [params.id, coupon]);

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (!data) return <Redirect href="/home" />;
    if (data)
      return (
        <MarketContent data={data} coupon={coupon} setCoupon={setCoupon} />
      );
  };

  return renderContent();
};

export default Market;
