import { Categories } from "@/components/categories";
import { Places } from "@/components/places";
import { IApiCategoryProps } from "@/core/interfaces/api-category-props";
import { IPlaceProps } from "@/core/interfaces/place-props";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

const Home = () => {
  const [categories, setCategories] = useState<IApiCategoryProps[]>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<IPlaceProps[]>([]);

  const fetchCategories = async () => {
    try {
      const { data }: { data: IApiCategoryProps[] } = await api.get(
        "/categories"
      );
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      Alert.alert("Categorias", "Não foi possível carregar as categorias.");
    }
  };

  const fetchMarkets = async () => {
    try {
      if (!category) return;

      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os locais.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        categorySelected={category}
      />
      <Places data={markets} />
    </View>
  );
};

export default Home;
