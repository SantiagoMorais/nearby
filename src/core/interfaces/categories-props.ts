import { IApiCategoryProps } from "./api-category-props";

export interface ICategoriesProps {
  data: IApiCategoryProps[];
  categorySelected: string;
  onSelect: (id: string) => void;
}
