import { Categories } from "@/components/categories";
import { Places } from "@/components/places";
import { View } from "react-native";

const Home = () => (
  <View style={{ flex: 1 }}>
    <Categories />
    <Places />
  </View>
);

export default Home;
