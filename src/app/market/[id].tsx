import { IMarketRouteProps } from "@/@core/interfaces/market-route-props";
import { Loading } from "@/components/loading";
import { Cover } from "@/components/market/cover";
import { api } from "@/services/api";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

const Market = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const [data, setData] = useState<IMarketRouteProps | null>(null);
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
  }, [params.id]);

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (!data) return <Redirect href="/home" />;
    if (data) return <Cover uri={data.cover} />;
  };

  return <View style={{ flex: 1 }}>{renderContent()}</View>;
};

export default Market;
