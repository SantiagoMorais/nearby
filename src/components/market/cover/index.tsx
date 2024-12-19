import { ICoverProps } from "@/@core/interfaces/cover-props";
import { ImageBackground, View } from "react-native";
import { s } from "./style";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { IconArrowLeft } from "@tabler/icons-react-native";

export const Cover = ({ uri }: ICoverProps) => (
  <ImageBackground source={{ uri }} style={s.container}>
    <View style={s.header}>
      <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
        <Button.Icon icon={IconArrowLeft} />
      </Button>
    </View>
  </ImageBackground>
);
