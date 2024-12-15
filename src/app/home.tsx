import { Alert, View } from "react-native";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] =
    useState<{ id: string; name: string }[]>();

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return <View style={{ flex: 1 }}></View>;
};

export default Home;
