import { ICategoriesProps } from "@/core/interfaces/categories-props";
import { FlatList } from "react-native";
import { Category } from "./category";
import { s } from "./style";

export const Categories = ({ data }: ICategoriesProps) => (
  <FlatList
    data={data}
    keyExtractor={(category) => category.id}
    renderItem={({ item }) => <Category iconId={item.id} name={item.name} />}
  />
);
