import { Alert, View } from "react-native";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories } from "@/components/categories";
import { IApiCategoryProps } from "@/core/interfaces/api-category-props";

const Home = () => {
  const [categories, setCategories] = useState<IApiCategoryProps[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await api.get("/categories");
        setCategories(data);
      } catch (error) {
        Alert.alert("Categorias", "Não foi possível carregar as categorias.");
      }
    }

    fetchCategories();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} />
    </View>
  );
};

export default Home;
