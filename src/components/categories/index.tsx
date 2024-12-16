import { IApiCategoryProps } from "@/core/interfaces/api-category-props";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Category } from "./category";
import { s } from "./style";

export const Categories = () => {
  const [categories, setCategories] = useState<IApiCategoryProps[]>([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data }: { data: IApiCategoryProps[] } = await api.get(
          "/categories"
        );
        setCategories(data);
        setCategory(data[0].id);
      } catch (error) {
        Alert.alert("Categorias", "Não foi possível carregar as categorias.");
      }
    }

    fetchCategories();
  }, []);

  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category.id}
      renderItem={({ item }) => (
        <Category
          iconId={item.id}
          name={item.name}
          onPress={() => setCategory(item.id)}
          isSelected={item.id === category}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.content}
      style={s.container}
    />
  );
};
