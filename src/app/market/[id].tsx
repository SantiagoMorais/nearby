import { IMarketsProps } from "@/@core/interfaces/markets-props";
import { Loading } from "@/components/loading";
import { api } from "@/services/api";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

const Market = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const [data, setData] = useState<IMarketsProps | null>(null);
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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{params.id}</Text>
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <View>
            <Text>{data?.name}</Text>
            <Text>{data?.description}</Text>
          </View>
        )
      )}
    </View>
  );
};

export default Market;
